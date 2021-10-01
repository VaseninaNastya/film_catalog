import {
  REQUESTED_FILMS,
  REQUESTED_FILMS_SUCCEEDED,
  REQUESTED_FILMS_FAILED
} from "./actionTypes";



export const requestFilmAction = (value : string ) => {
  return { type: REQUESTED_FILMS,
  value }
};

export const requestFilmsSuccessAction = (data : object) => {
  console.log("data", data, typeof data)
  return { type: REQUESTED_FILMS_SUCCEEDED, data: data }
};

export const requestFilmsErrorAction = () => {
  return { type:  REQUESTED_FILMS_FAILED }
};

