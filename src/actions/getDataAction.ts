import {
  REQUESTED_FILM,
  REQUESTED_FILM_SUCCEEDED,
  REQUESTED_FILM_FAILED,
  GET_REQUEST_VALUE
} from "./actionTypes";



export const requestFilmAction = (value : string) => {
  return { type: REQUESTED_FILM,
  value }
};

export const requestFilmSuccessAction = (data : any) => {
  return { type: REQUESTED_FILM_SUCCEEDED, data: data }
};

export const requestFilmErrorAction = () => {
  return { type:  REQUESTED_FILM_FAILED }
};


export const getRequestValueAction = (value: string) => {
  return { type:  GET_REQUEST_VALUE, data: value }
};