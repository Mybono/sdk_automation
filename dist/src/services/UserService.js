"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const interfaces_1 = require("../interfaces");
const services_1 = require("../services");
const utils_1 = require("../utils");
/**
 * A generic service class responsible for managing CRUD operations
 * for a specific MongoDB collection, defined at instantiation.
 * Defaults to 'users' if no collection name is provided.
 */
class UserService {
    constructor(db, collectionName = interfaces_1.collections.users) {
        this.collectionName = collectionName;
        const collection = db.collection(collectionName);
        this.mongoService = new services_1.MongoService(collection);
    }
    async createUser(userRole, userData) {
        try {
            const doc = userData || utils_1._.getRandomUser(userRole || interfaces_1.UserRole.standard_user);
            const inserted = await this.mongoService.insertOne(doc);
            utils_1.logger.info(`[UserService] Created user ${inserted._id}`);
            return inserted;
        }
        catch (error) {
            throw new Error(`[createUser]: ${error}`);
        }
    }
    async findUser(query) {
        try {
            return this.mongoService.findOne(query);
        }
        catch (error) {
            throw new Error(`[findUser]: failed to find user:${query}\n${error}`);
        }
    }
    async deleteUser(userId) {
        try {
            return this.mongoService.deleteOne(userId);
        }
        catch (error) {
            throw new Error(`[deleteUser]: failed to deleted user:${userId}\n${error}`);
        }
    }
}
exports.UserService = UserService;
