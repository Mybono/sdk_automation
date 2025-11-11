import { Db } from "mongodb";
/**
 * Singleton class to manage the single connection instance to MongoDB.
 * Ensures the connection is opened only once and can be reused across the application.
 */
export declare class DbConnection {
    private static instance;
    private client;
    private db;
    private isConnected;
    /**
     * Gets the single instance of DbConnection.
     * @returns The singleton instance of DbConnection.
     */
    static getInstance(): DbConnection;
    /**
     * Opens the connection to MongoDB using the MONGO_CONNECTION_STRING from env.
     * If a connection is already open, it returns the existing Db object.
     * @returns A promise that resolves to the MongoDB Db object.
     */
    openConnection(MONGO_CONNECTION_STRING: string): Promise<Db>;
    /**
     * Closes the connection to MongoDB.
     * @returns A promise that resolves when the connection is closed.
     */
    closeConnection(): Promise<void>;
}
