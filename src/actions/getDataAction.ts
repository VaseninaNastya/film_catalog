import {
  REQUESTED_FILMS,
  REQUESTED_FILMS_SUCCEEDED,
  REQUESTED_FILMS_FAILED
} from "./actionTypes";

interface requestFilmActionType  {
  type: string;
  value: string
}
interface requestFilmsSuccessActionActionType  {
  type: string;
  data: any
}
interface requestFilmsErrorActionActionType  {
  type: string;
}
export const requestFilmAction  = (value : string ):requestFilmActionType => {
  return { 
    type: REQUESTED_FILMS,
    value 
  }
};


export const requestFilmsSuccessAction  = (data : any) : requestFilmsSuccessActionActionType => {
  return { type: REQUESTED_FILMS_SUCCEEDED, data: data }
};

export const requestFilmsErrorAction = ():requestFilmsErrorActionActionType => {
  return { type:  REQUESTED_FILMS_FAILED }
};
