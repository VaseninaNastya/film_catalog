import { combineReducers} from 'redux'
import { getDataReduser } from './getDataReduser'
import { getOneFilmDataReduser } from './getOneFilmDataReduser'
import  filmSortReduser  from './filmSortReduser'




const redusers   = combineReducers({
    getData: getDataReduser,
    getOneFilmData: getOneFilmDataReduser,
    filmSort : filmSortReduser
});
export default redusers

export type RootState = ReturnType<typeof redusers>