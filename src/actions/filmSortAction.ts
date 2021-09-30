import { FILM_SORT, CLEAR_FILM_SORT } from "./actionTypes";

export const filmSortAction = (value:object) =>{
    return {
        type: FILM_SORT,
        payload: value
    }
}
export const clearFilmSortAction = () =>{
    return {
        type: CLEAR_FILM_SORT
    }
}