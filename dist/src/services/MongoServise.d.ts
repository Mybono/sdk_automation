import { Collection, ObjectId, WithId } from 'mongodb';
export declare class MongoService<T extends {
    _id?: ObjectId;
}> {
    private readonly collection;
    constructor(collection: Collection<T>);
    findOne(query: Partial<T>): Promise<WithId<T> | null>;
    insertOne(doc: Omit<T, '_id'>): Promise<WithId<T>>;
    updateOne(id: ObjectId, update: Partial<T>): Promise<WithId<T> | null>;
    deleteOne(id: ObjectId): Promise<boolean>;
}
