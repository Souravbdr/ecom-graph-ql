import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectStore = state => state.shop;

export const selectStoreCollections = createSelector(
    [selectStore],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectStoreCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectStoreCollections],
        collections => collections[collectionUrlParam]
    ));