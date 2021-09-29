
import { takeEvery, call, put } from 'redux-saga/effects'


import {requestFilmSuccessAction, requestFilmErrorAction} from './actions/getDataAction'

import apiUrl from "./constants/urls.constants";



function* fetchFilmAsync(action) {
  try {
     const data = yield call(fetchFilms, action.value)
     yield put(requestFilmSuccessAction(data));
  } catch (e) {
     yield put(requestFilmErrorAction());
  }
}
const fetchFilms = (value) => {
  return  fetch( apiUrl.apiUrl + value + "&plot=fulll&apikey=5704d601&")
  .then(res => res.json())
}

export function* watchFetchFilm() {
  yield takeEvery('REQUESTED_FILM', fetchFilmAsync);
}

