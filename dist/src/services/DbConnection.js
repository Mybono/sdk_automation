"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../utils");
/**
 * Singleton class to manage the single connection instance to MongoDB.
 * Ensures the connection is opened only once and can be reused across the application.
 */
class DbConnection {
    constructor() {
        this.client = null;
        this.db = null;
        this.isConnected = false;
    }
    /**
     * Gets the single instance of DbConnection.
     * @returns The singleton instance of DbConnection.
     */
    static getInstance() {
        if (!DbConnection.instance) {
            DbConnection.instance = new DbConnection();
        }
        return DbConnection.instance;
    }
    /**
     * Opens the connection to MongoDB using the MONGO_CONNECTION_STRING from env.
     * If a connection is already open, it returns the existing Db object.
     * @returns A promise that resolves to the MongoDB Db object.
     */
    async openConnection(MONGO_CONNECTION_STRING) {
        if (this.isConnected && this.db) {
            return this.db;
        }
        this.client = new mongodb_1.MongoClient(MONGO_CONNECTION_STRING);
        await this.client.connect();
        this.db = this.client.db();
        this.isConnected = true;
        utils_1.logger.info("[openConnection] Connected successfully");
        return this.db;
    }
    /**
     * Closes the connection to MongoDB.
     * @returns A promise that resolves when the connection is closed.
     */
    async closeConnection() {
        if (this.client && this.isConnected) {
            await this.client.close();
            this.isConnected = false;
            this.client = null;
            this.db = null;
            utils_1.logger.warn("[closeConnection]: Connection closed");
        }
    }
}
exports.DbConnection = DbConnection;
