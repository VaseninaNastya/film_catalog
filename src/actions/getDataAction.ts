import {
  REQUESTED_FILMS,
  REQUESTED_FILMS_SUCCEEDED,
  REQUESTED_FILMS_FAILED
} from "./actionTypes";



export const requestFilmAction = (value : string) => {
  return { type: REQUESTED_FILMS,
  value }
};

export const requestFilmsSuccessAction = (data : any) => {
  return { type: REQUESTED_FILMS_SUCCEEDED, data: data }
};

export const requestFilmsErrorAction = () => {
  return { type:  REQUESTED_FILMS_FAILED }
};

