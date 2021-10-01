import {
    REQUESTED_ONE_FILM,
    REQUESTED_ONE_FILM_SUCCEEDED,
    REQUESTED_ONE_FILM_FAILED
  } from "../actions/actionTypes";


const initialState = {
    data: '',
    loading: false,
    error: false,
  };
  interface Action {
    type: string;
    data: any
  }
 export const getOneFilmDataReduser = (state = initialState, {type, data}: Action) => {
    switch (type) {
      case REQUESTED_ONE_FILM:
        return {
          ...state,
          data: '',
          loading: true,
          error: false,
        };
      case REQUESTED_ONE_FILM_SUCCEEDED:
        return {
          ...state,
          data: data,
          loading: false,
          error: false,

        };
      case REQUESTED_ONE_FILM_FAILED:
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
