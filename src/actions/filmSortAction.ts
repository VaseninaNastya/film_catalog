import { FILM_SORT, CLEAR_FILM_SORT } from "./actionTypes";

interface clearFilmSortType {
    type: string;
}

interface filmSortActionType<T> {
    type: string;
    payload:  Array<T>
}

export function filmSortAction<T> (value : Array<T>):filmSortActionType<T> {
    return {
        type: FILM_SORT,
        payload: value
    }
}
export function clearFilmSortAction ():clearFilmSortType {
    return {
        type: CLEAR_FILM_SORT
    }
}


