import { MongoService } from "../services";
import { Collection, ObjectId } from "mongodb";

interface User {
  _id?: ObjectId;
  username: string;
  email: string;
}

describe("MongoService", () => {
  let mockCollection: Partial<Collection<User>>;
  let service: MongoService<User>;

  const userData: Omit<User, "_id"> = {
    username: "testuser",
    email: "test@example.com",
  };
  const fakeId = new ObjectId();

  beforeEach(() => {
    mockCollection = {
      findOne: jest.fn(),
      insertOne: jest.fn(),
      findOneAndUpdate: jest.fn(),
      deleteOne: jest.fn(),
    };
    service = new MongoService(mockCollection as Collection<User>);
    jest.clearAllMocks();
  });

  it("should find a document", async () => {
    (mockCollection.findOne as jest.Mock).mockResolvedValueOnce({
      _id: fakeId,
      ...userData,
    });

    const result = await service.findOne({ username: "testuser" });

    expect(mockCollection.findOne).toHaveBeenCalledWith({
      username: "testuser",
    });
    expect(result).toEqual({ _id: fakeId, ...userData });
  });

  it("should insert a document", async () => {
    (mockCollection.insertOne as jest.Mock).mockResolvedValueOnce({
      insertedId: fakeId,
    });

    const result = await service.insertOne(userData);

    expect(mockCollection.insertOne).toHaveBeenCalledWith(userData);
    expect(result).toEqual({ _id: fakeId, ...userData });
  });

  it("should update a document", async () => {
    const updatedUser = {
      _id: fakeId,
      username: "updated",
      email: "test@example.com",
    };
    (mockCollection.findOneAndUpdate as jest.Mock).mockResolvedValueOnce({
      value: updatedUser,
    });

    const result = await service.updateOne(fakeId, { username: "updated" });

    expect(mockCollection.findOneAndUpdate).toHaveBeenCalledWith(
      { _id: fakeId },
      { $set: { username: "updated" } },
      { returnDocument: "after" },
    );
    expect(result).toEqual(updatedUser);
  });

  it("should return null if update finds nothing", async () => {
    (mockCollection.findOneAndUpdate as jest.Mock).mockResolvedValueOnce({
      value: null,
    });

    const result = await service.updateOne(fakeId, { username: "updated" });
    expect(result).toBeNull();
  });

  it("should delete a document successfully", async () => {
    (mockCollection.deleteOne as jest.Mock).mockResolvedValueOnce({
      deletedCount: 1,
    });

    const result = await service.deleteOne(fakeId);

    expect(mockCollection.deleteOne).toHaveBeenCalledWith({ _id: fakeId });
    expect(result).toBe(true);
  });

  it("should return false if document was not deleted", async () => {
    (mockCollection.deleteOne as jest.Mock).mockResolvedValueOnce({
      deletedCount: 0,
    });

    const result = await service.deleteOne(fakeId);

    expect(result).toBe(false);
  });
});
