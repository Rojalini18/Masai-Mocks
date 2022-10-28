import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

export const combine = combineReducers({
  reducer,
});

export const store = createStore(combine, applyMiddleware(thunk));
