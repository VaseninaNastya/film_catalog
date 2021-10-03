
import { FILM_SORT, CLEAR_FILM_SORT } from "../actions/actionTypes";
const initialArray: any = []
const initialState = {
  sortedData: initialArray
};
interface Action {
  type: string;
  payload: any
}
interface initialStateType {
  sortedData: any
}

const filmSortReduser = (state = initialState, { type, payload}:Action) : initialStateType => {
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

