import {
    REQUESTED_FILMS,
    REQUESTED_FILMS_SUCCEEDED,
    REQUESTED_FILMS_FAILED
  } from "../actions/actionTypes";

const initialState = {
    data: '',
    loading: false,
    error: false,
  };

 export const getDataReduser = (state = initialState, {type,data} : any) => {
    switch (type) {
      case REQUESTED_FILMS:
        return {
            ...state,
          data: '',
          loading: true,
          error: false,
        };
      case REQUESTED_FILMS_SUCCEEDED:
        return {
            ...state,
          data: data,
          loading: false,
          error: false,

        };
      case REQUESTED_FILMS_FAILED:
        return {
            ...state,
          data: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };
