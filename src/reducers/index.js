import {combineReducers} from "redux"
import taskReducer from './taskReducer'
import modalReducer from './modalReducer'
export default combineReducers({
	data:taskReducer,
	modal:modalReducer
})
