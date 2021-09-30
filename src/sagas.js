import { takeEvery, call, put } from 'redux-saga/effects'
import {requestFilmsSuccessAction, requestFilmsErrorAction} from './actions/getDataAction'
import {requestOneFilmSuccessAction, requestOneFilmErrorAction} from './actions/getOneFilmDataAction'
import apiUrl from "./constants/urls.constants";
//all films
function* fetchFilmsAsync (action) {
  try {
    const data = yield call(fetchFilms, action.value)
    yield put(requestFilmsSuccessAction(data));
  } catch (e) {
    yield put(requestFilmsErrorAction());
  }
}
const fetchFilms = (value ) => {
  return  fetch( apiUrl.apiUrlList + value + apiUrl.apiKey)
  .then(res => res.json())
}

export function* watchFetchFilms() {
  yield takeEvery('REQUESTED_FILMS', fetchFilmsAsync);
}

//one film
function* fetchOneFilmAsync (action) {
  try {
    const data = yield call(fetchOneFilm, action.value)
    yield put(requestOneFilmSuccessAction(data));
  } catch (e) {
    yield put(requestOneFilmErrorAction());
  }
}


const fetchOneFilm = (value ) => {
  let filmUrl = apiUrl.apiUrlFilm + value + apiUrl.apiKeyOneFilm
  console.log("filmUrl", filmUrl)
  return  fetch( apiUrl.apiUrlFilm + value + apiUrl.apiKeyOneFilm)
  .then(res => res.json())
}

export function* watchFetchOneFilm() {
  yield takeEvery('REQUESTED_ONE_FILM', fetchOneFilmAsync);
}


/*import { takeEvery, call, put } from 'redux-saga/effects'
import {requestFilmSuccessAction, requestFilmErrorAction} from './actions/getDataAction'
import apiUrl from "./constants/urls.constants";

function* fetchFilmAsync(action: any) {
  try {
     const data = yield call(fetchFilms, action.value)
     yield put(requestFilmSuccessAction(data));
  } catch (e) {
     yield put(requestFilmErrorAction());
  }
}
const fetchFilms = (value :string) => {
  return  fetch( apiUrl.apiUrlList + value + "&plot=fulll&apikey=5704d601&")
  .then(res => res.json())
}

export function* watchFetchFilms() {
  yield takeEvery('REQUESTED_FILM', fetchFilmAsync);
}*/

