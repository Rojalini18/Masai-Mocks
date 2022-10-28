import { legacy_createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./Data Reducer/DataReducer"


const RootReducer=combineReducers({Details:reducer})
export const Store=legacy_createStore(RootReducer,applyMiddleware(thunk))