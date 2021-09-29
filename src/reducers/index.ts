import { combineReducers} from 'redux'
import { getDataReduser } from './getDataReduser'
import {getRequestValueReduser} from './getRequestValueReduser'
const redusers = combineReducers({
    getData: getDataReduser,
    requestValue: getRequestValueReduser
});
export default redusers