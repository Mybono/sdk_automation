import { Db, ObjectId } from 'mongodb';
import { CollectionsType } from '../interfaces';
export declare class AssetsTracker {
    private db;
    private trackedAssets;
    constructor(db: Db);
    /**
     * Track an asset by collection name (must be in CollectionsType) and its ObjectId
     */
    track(params: Partial<Record<CollectionsType, ObjectId>>): Promise<void>;
    /**
     * Cleanup tracked assets for the specified collections
     */
    cleanup(collectionsToCleanup: Partial<Record<CollectionsType, boolean>>): Promise<void>;
}
