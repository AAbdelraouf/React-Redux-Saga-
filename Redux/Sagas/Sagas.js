import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga() {
    yield takeEvery("DATA_REQUESTED", workerSaga)
}

function* workerSaga() {
    try {
        var payLoad = yield call(getData);
        yield put({ type: "DATA_LOADED", payLoad })
    } catch (error) {
        yield put({ type: "API_ERRORED", payLoad, error })
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
}