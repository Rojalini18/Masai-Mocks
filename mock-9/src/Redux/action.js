import * as types from './actionTypes';
import axios from 'axios';
export const loginDetail = payload => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post('https://reqres.in/api/login', payload)
    .then(res => {
      return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch(error => {
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};
