import {
  REQUESTED_FILMS,
  REQUESTED_FILMS_SUCCEEDED,
  REQUESTED_FILMS_FAILED
} from "./actionTypes";

interface requestFilmAction  {
  type: string;
  value: string
}
interface requestFilmsSuccessActionAction  {
  type: string;
  data: any
}
interface requestFilmsErrorActionAction  {
  type: string;
}
export const requestFilmAction  = (value : string ): requestFilmAction => {
  return { 
    type: REQUESTED_FILMS,
    value 
}
};

export const requestFilmsSuccessAction  = (data :any): requestFilmsSuccessActionAction => {
  return { type: REQUESTED_FILMS_SUCCEEDED, data: data }
};

export const requestFilmsErrorAction = (): requestFilmsErrorActionAction => {
  return { type:  REQUESTED_FILMS_FAILED }
};

