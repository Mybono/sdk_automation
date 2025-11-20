import { UserRole } from '../interfaces';
import { UserService } from '../services';
import { ObjectId } from 'mongodb';
import { _ } from '../utils';

describe('UserService', () => {
  const mockInsertOne = jest.fn();
  const mockFindOne = jest.fn();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockDb: any = {
    collection: () => ({
      insertOne: mockInsertOne,
      findOne: mockFindOne,
    }),
  };

  let service: UserService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new UserService(mockDb);
  });

  it('should create user with valid email', async () => {
    const dummyUser = _.getRandomUser(UserRole.standard_user);
    const fakeId = new ObjectId();
    mockInsertOne.mockResolvedValueOnce({ insertedId: fakeId });

    const result = await service.createUser(UserRole.standard_user, dummyUser);

    expect(mockInsertOne).toHaveBeenCalledWith(dummyUser);
    expect(result).toEqual({ ...dummyUser, _id: fakeId });
  });
});
