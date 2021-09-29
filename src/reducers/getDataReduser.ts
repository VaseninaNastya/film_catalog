import {
    REQUESTED_FILM,
    REQUESTED_FILM_SUCCEEDED,
    REQUESTED_FILM_FAILED
  } from "../actions/actionTypes";

const initialState = {
    data: '',
    loading: false,
    error: false,
  };

 export const getDataReduser = (state = initialState, {type,data} : any) => {
    switch (type) {
      case REQUESTED_FILM:
        return {
          data: '',
          loading: true,
          error: false,
        };
      case REQUESTED_FILM_SUCCEEDED:
        return {
          data: data,
          loading: false,
          error: false,

        };
      case REQUESTED_FILM_FAILED:
        return {
          data: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };
