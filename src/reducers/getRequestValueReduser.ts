import {
    GET_REQUEST_VALUE
  } from "../actions/actionTypes";

const initialState = {
    requestValue: '',
  };

 export const getRequestValueReduser = (state = initialState, {type,data} : any) => {
    switch (type) {
      case GET_REQUEST_VALUE:
        return {
          requestValue: data
        };
      default:
        return state;
    }
  };
