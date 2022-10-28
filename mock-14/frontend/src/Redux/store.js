import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { dataReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ data: dataReducer });

export const store = createStore(rootReducer);
