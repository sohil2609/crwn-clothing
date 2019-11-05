import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    shopData: {},
    isFetching: false,
    errorMessage: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTION_DATA_SUCCESS:
            return { ...state, shopData: action.payload, isFetching: false}
        case ShopActionTypes.FETCH_COLLECTION_DATA_FAILURE:
            return { ...state, errorMessage: action.payload, isFetching: false}
        case ShopActionTypes.FETCH_COLLECTION_DATA_START:
            return { ...state, isFetching: true}
        default:
            return state
    }
}

export default shopReducer