"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = void 0;
class MongoService {
    constructor(collection) {
        this.collection = collection;
    }
    async findOne(query) {
        return this.collection.findOne(query);
    }
    async insertOne(doc) {
        const result = await this.collection.insertOne(doc);
        return { _id: result.insertedId, ...doc };
    }
    async updateOne(id, update) {
        const result = await this.collection.findOneAndUpdate({ _id: id }, { $set: update }, { returnDocument: 'after' });
        return result.value ?? null;
    }
    async deleteOne(id) {
        const result = await this.collection.deleteOne({ _id: id });
        return result.deletedCount === 1;
    }
}
exports.MongoService = MongoService;
