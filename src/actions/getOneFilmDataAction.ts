import {
  REQUESTED_ONE_FILM,
  REQUESTED_ONE_FILM_SUCCEEDED,
  REQUESTED_ONE_FILM_FAILED,
} from "./actionTypes";


interface requestOneFilmActionType {
  type: string;
  value: string | null
}

interface requestOneFilmSuccessActionType {
  type: string;
 data:  any
}

interface requestOneFilmErrorActionType {
  type: string;
}

export const requestOneFilmAction = (value : string | null) :requestOneFilmActionType => {
  return { 
    type: REQUESTED_ONE_FILM,
    value 
  }
};

export const requestOneFilmSuccessAction = (data : any) : requestOneFilmSuccessActionType => {
  return { type: REQUESTED_ONE_FILM_SUCCEEDED, data: data }
};



export const requestOneFilmErrorAction = () : requestOneFilmErrorActionType => {
  return { type:  REQUESTED_ONE_FILM_FAILED }
};

/*import {
  REQUESTED_ONE_FILM,
  REQUESTED_ONE_FILM_SUCCEEDED,
  REQUESTED_ONE_FILM_FAILED,
} from "./actionTypes";


interface requestOneFilmActionType {
  type: string;
  value: string | null
}

interface requestOneFilmSuccessActionType {
  type: string;
 data:  any
}

interface requestOneFilmErrorActionType {
  type: string;
}

export const requestOneFilmAction = (value : string | null) : requestOneFilmActionType => {
  return { 
    type: REQUESTED_ONE_FILM,
    value 
  }
};

export const requestOneFilmSuccessAction = (data : any) : requestOneFilmSuccessActionType => {
  return { type: REQUESTED_ONE_FILM_SUCCEEDED, data: data }
};



export const requestOneFilmErrorAction = () : requestOneFilmErrorActionType=> {
  return { type:  REQUESTED_ONE_FILM_FAILED }
};


 */
