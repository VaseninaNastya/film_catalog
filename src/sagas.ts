import { takeEvery, call, put } from 'redux-saga/effects'
import {requestFilmsSuccessAction, requestFilmsErrorAction} from './actions/getDataAction'
import {requestOneFilmSuccessAction, requestOneFilmErrorAction} from './actions/getOneFilmDataAction'
import apiUrl from "./constants/urls.constants";
type fetchFilmsType = ReturnType<typeof fetchFilms>
type fetchOneFilmType = ReturnType<typeof fetchOneFilm>


interface actionType {
  value: string,
  type:  string,
}

//all films
function* fetchFilmsAsync (action: actionType):Generator<any, any, any> {
  try {
    const data:fetchFilmsType = yield call(fetchFilms, action.value)
    yield put(requestFilmsSuccessAction(data));
  } catch (e) {
    yield put(requestFilmsErrorAction());
  }
}
const fetchFilms = (value: string ) : Promise<any>=> {
  return  fetch( apiUrl.apiUrlList + value + apiUrl.apiKey)
  .then(res => res.json())
}

export function* watchFetchFilms(): Generator<any, any, any> {
  yield takeEvery('REQUESTED_FILMS', fetchFilmsAsync);
}

//one film
function* fetchOneFilmAsync (action :actionType) : Generator<any, any, any>{
  try {
    const data:fetchOneFilmType = yield call(fetchOneFilm, action.value)
    yield put(requestOneFilmSuccessAction(data));
  } catch (e) {
    yield put(requestOneFilmErrorAction());
  }
}


const fetchOneFilm = (value: string ):Promise<any> => {
  return  fetch( apiUrl.apiUrlFilm + value + apiUrl.apiKeyOneFilm)
  .then(res => res.json())
}

export function* watchFetchOneFilm():Generator<any, any, any> {
  yield takeEvery('REQUESTED_ONE_FILM', fetchOneFilmAsync);
}



