import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, getConvertCollectionsSnapshotToMap } from '../../firebase/firebase.utilities';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';


export function* fetchCollectionAsync() {
    try {
        const CollectionRef = firestore.collection("collection");
        const snapshot = yield CollectionRef.get();
        const collectionMap = yield call(getConvertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap));
    } catch(error) {
        yield put(fetchCollectionFailure(error.message))
    }
} 

export function* fetchCollectionStart () {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_DATA_START, fetchCollectionAsync)
} 


