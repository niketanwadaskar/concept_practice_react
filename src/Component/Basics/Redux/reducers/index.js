import { combineReducers } from "redux";
import addReducer from "./addReducer";
import subtractReducer from "./subtractReducer";
import multiplyReducer from "./multiplyReducer"
import divideReducer from "./divideReducer"

const rootReducer = combineReducers({
    add: addReducer,
    subtract: subtractReducer, 
    multiply: multiplyReducer,
    divide: divideReducer
})

export default rootReducer;