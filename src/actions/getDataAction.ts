import {
  REQUESTED_FILM,
  REQUESTED_FILM_SUCCEEDED,
  REQUESTED_FILM_FAILED,
  FETCHED_FILM
} from "./actionTypes";



export const requestFilmAction = () => {
  return { type: REQUESTED_FILM }
};

export const requestFilmSuccessAction = (data : any) => {
  console.log(data)
  return { type: REQUESTED_FILM_SUCCEEDED, data: data }
};

export const requestFilmErrorAction = () => {
  return { type:  REQUESTED_FILM_FAILED }
};

export const fetchFilmAction = () => {
  return { type: FETCHED_FILM }
};
