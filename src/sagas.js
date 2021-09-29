
import { takeEvery, call, put } from 'redux-saga/effects'


import {requestFilmAction, requestFilmSuccessAction, requestFilmErrorAction} from './actions/getDataAction'

import apiUrl from "./constants/urls.constants";



function* fetchFilmAsync() {
  try {
     const data = yield call(() => {
      return fetch( apiUrl.apiUrl )
              .then(res => res.json())
      });


     yield put(requestFilmSuccessAction(data));
  } catch (e) {
     yield put(requestFilmErrorAction());
  }
}


export function* watchFetchFilm() {
  yield takeEvery('FETCHED_FILM', fetchFilmAsync);
}

/*import { put, call } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchIncrementAsync),
  ])
}
*/