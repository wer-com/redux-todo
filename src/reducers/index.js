import {combineReducers} from "redux";
import {todoReducer} from './todoReducer'

const allReducers = combineReducers({
    todo:todoReducer
})

export default allReducers;