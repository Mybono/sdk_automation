"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsTracker = void 0;
const _1 = require(".");
class AssetsTracker {
    constructor(db) {
        this.trackedAssets = {};
        this.db = db;
    }
    /**
     * Track an asset by collection name (must be in CollectionsType) and its ObjectId
     */
    async track(params) {
        for (const [collectionName, assetId] of Object.entries(params)) {
            const key = collectionName;
            if (!this.trackedAssets[key]) {
                this.trackedAssets[key] = [];
            }
            this.trackedAssets[key].push(assetId);
            _1.logger.debug(`Tracked asset ID ${assetId} in collection ${collectionName}`);
        }
    }
    /**
     * Cleanup tracked assets for the specified collections
     */
    async cleanup(collectionsToCleanup) {
        const collections = Object.entries(collectionsToCleanup)
            .filter(([_, shouldCleanup]) => shouldCleanup)
            .map(([name]) => name);
        if (!collections.length) {
            _1.logger.warn('No collections specified for cleanup.');
            return;
        }
        for (const collectionName of collections) {
            const ids = this.trackedAssets[collectionName] || [];
            if (!ids.length) {
                _1.logger.warn(`No tracked assets found in collection: ${collectionName}`);
                continue;
            }
            try {
                const collection = this.db.collection(collectionName);
                const result = await collection.deleteMany({ _id: { $in: ids } });
                _1.logger.info(`Deleted ${result.deletedCount}/${ids.length} assets from collection ${collectionName}`);
            }
            catch (error) {
                _1.logger.error(`Error cleaning collection ${collectionName}:`, error);
            }
            this.trackedAssets[collectionName] = [];
        }
        _1.logger.info('Cleanup complete.');
    }
}
exports.AssetsTracker = AssetsTracker;
