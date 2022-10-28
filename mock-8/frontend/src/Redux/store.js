import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as authReducer } from './auth/reducer';

export const combine = combineReducers({
  authReducer,
});

export const store = createStore(combine, applyMiddleware(thunk));
