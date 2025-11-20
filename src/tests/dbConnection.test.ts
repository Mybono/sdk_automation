import { DbConnection } from '../services/DbConnection';
import { MongoClient } from 'mongodb';
import { logger } from '../utils';

const connectionString = 'mongodb://mongo:27017/qa_portfolio';

jest.mock('../utils', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('mongodb', () => {
  const mDb = { db: jest.fn() };
  const mClient = {
    connect: jest.fn(),
    db: jest.fn(() => mDb),
    close: jest.fn(),
  };

  return {
    MongoClient: jest.fn(() => mClient),
  };
});

describe('DbConnection', () => {
  let dbConnection: DbConnection;

  beforeEach(() => {
    jest.clearAllMocks();
    dbConnection = DbConnection.getInstance();
  });

  it('should return the same instance (singleton)', () => {
    const instance1 = DbConnection.getInstance();
    const instance2 = DbConnection.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should return existing connection if already connected', async () => {
    const firstDb = await dbConnection.openConnection(connectionString);
    const secondDb = await dbConnection.openConnection(connectionString);

    expect(MongoClient).toHaveBeenCalledTimes(1);
    expect(firstDb).toBe(secondDb);
  });

  it('should close connection if connected', async () => {
    await dbConnection.openConnection(connectionString);
    await dbConnection.closeConnection();

    expect(dbConnection['isConnected']).toBe(false);
    expect(dbConnection['client']).toBeNull();
    expect(dbConnection['db']).toBeNull();
    expect(logger.warn).toHaveBeenCalledWith('[closeConnection]: Connection closed');
  });

  it('should not throw when closing if not connected', async () => {
    await dbConnection.closeConnection();
    expect(dbConnection['isConnected']).toBe(false);
    expect(logger.warn).not.toHaveBeenCalled();
  });
});
