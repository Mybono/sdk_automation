import { ObjectId, Collection, Db } from 'mongodb';
import { AssetsTracker } from '../utils/assetsTracker';
import { collections } from '../interfaces';
import { logger } from '../utils/logger';

jest.mock('../utils/logger', () => ({
  logger: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

describe('AssetsTracker', () => {
  let mockDb: Db;
  let mockCollection: Collection<typeof collections>;
  let tracker: AssetsTracker;

  beforeEach(() => {
    jest.clearAllMocks();

    mockCollection = {
      deleteMany: jest.fn().mockResolvedValue({ deletedCount: 2 }),
    } as unknown as Collection<typeof collections>;

    mockDb = {
      collection: jest.fn(() => mockCollection),
    } as unknown as Db;

    tracker = new AssetsTracker(mockDb);
  });

  describe('track', () => {
    it('should track asset IDs correctly', async () => {
      const assetId = new ObjectId();
      await tracker.track({ users: assetId });

      expect(tracker['trackedAssets'].users).toContain(assetId);
      expect(logger.debug).toHaveBeenCalledWith(`Tracked asset ID ${assetId} in collection users`);
    });
  });

  describe('cleanup', () => {
    it('should clean tracked assets in specified collections', async () => {
      const id1 = new ObjectId();
      const id2 = new ObjectId();
      tracker['trackedAssets'] = { users: [id1, id2] };

      await tracker.cleanup({ users: true });

      expect(mockDb.collection).toHaveBeenCalledWith('users');
      expect(mockCollection.deleteMany).toHaveBeenCalledWith({
        _id: { $in: [id1, id2] },
      });
      expect(logger.info).toHaveBeenCalledWith('Deleted 2/2 assets from collection users');
      expect(tracker['trackedAssets'].users).toEqual([]);
    });
  });
});
