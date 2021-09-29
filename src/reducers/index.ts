import { combineReducers} from 'redux'
import getDataReduser from './getDataReduser'

const redusers = combineReducers({
    getData: getDataReduser
});
export default redusers