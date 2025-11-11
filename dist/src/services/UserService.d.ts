import { User, UserRoleType } from '../interfaces';
import { Db, ObjectId } from 'mongodb';
/**
 * A generic service class responsible for managing CRUD operations
 * for a specific MongoDB collection, defined at instantiation.
 * Defaults to 'users' if no collection name is provided.
 */
export declare class UserService {
    private collectionName;
    private mongoService;
    constructor(db: Db, collectionName?: "users");
    createUser(userRole?: UserRoleType, userData?: Omit<User, '_id'>): Promise<User>;
    findUser(query: Partial<User>): Promise<User | null>;
    deleteUser(userId: ObjectId): Promise<boolean>;
}
