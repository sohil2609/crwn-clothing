import ShopActionTypes from './shop.types'


export const fetchCollectionStart = (payload) => ({
    type: ShopActionTypes.FETCH_COLLECTION_DATA_START
})

export const fetchCollectionSuccess = (collection) => ({
    type: ShopActionTypes.FETCH_COLLECTION_DATA_SUCCESS,
    payload: collection
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTION_DATA_START,
    payload: errorMessage
})
