import {
  REQUESTED_ONE_FILM,
  REQUESTED_ONE_FILM_SUCCEEDED,
  REQUESTED_ONE_FILM_FAILED,
} from "./actionTypes";



export const requestOneFilmAction = (value : string) => {
  return { type: REQUESTED_ONE_FILM,
  value }
};

export const requestOneFilmSuccessAction = (data : any) => {
  return { type: REQUESTED_ONE_FILM_SUCCEEDED, data: data }
};



export const requestOneFilmErrorAction = () => {
  return { type:  REQUESTED_ONE_FILM_FAILED }
};

