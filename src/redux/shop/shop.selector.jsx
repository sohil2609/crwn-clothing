import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop

export const selectCollections = createSelector(
    [shopSelector],
    (shop) => shop.shopData
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map((collectionName) => collections[collectionName])
)

export const selectCollection = collectionUrlParam => {
    return createSelector([selectCollections], (collections) => collections[collectionUrlParam])
}