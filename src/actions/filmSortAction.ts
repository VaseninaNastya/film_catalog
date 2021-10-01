import { FILM_SORT, CLEAR_FILM_SORT } from "./actionTypes";
interface filmSortActionType {
    type: string;
    payload: any
}
interface clearFilmSortType {
    type: string;
}

export const filmSortAction = (value: any) : filmSortActionType =>{
    return {
        type: FILM_SORT,
        payload: value
    }
}
export const clearFilmSortAction = ():clearFilmSortType =>{
    return {
        type: CLEAR_FILM_SORT
    }
}