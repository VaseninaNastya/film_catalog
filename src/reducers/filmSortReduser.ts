
import { FILM_SORT, CLEAR_FILM_SORT } from "../actions/actionTypes";
const initialState = {
  sortedData: []
};
interface Action {
  type: string;
  payload: any}
const filmSortReduser = (state = initialState, { type, payload}:Action) => {
  switch (type) {
    case FILM_SORT:
      return {...state, sortedData: payload};
      case CLEAR_FILM_SORT:
        return {...state, sortedData:  []};
    default:
      return state;
  }
};

export default filmSortReduser;


