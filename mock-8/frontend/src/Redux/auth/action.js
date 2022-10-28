import * as types from './actionTypes';
import axios from 'axios';

export const adminloginFunc = payload => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post('https://mock-8.herokuapp.com/web/admin', payload)
    .then(res => {
      console.log(res.data);

      return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch(error => {
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const adminregisterFunc = payload => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post('https://mock-8.herokuapp.com/web/hotelDetails', payload)
    .then(res => {
      return dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      return dispatch({ type: types.REGISTER_FAILURE });
    });
};

// user details
export const userloginFunc = payload => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post('https://mock-8.herokuapp.com/web/user', payload)
    .then(res => {
      console.log(res.data);

      return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch(error => {
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const userregisterFunc = payload => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post('https://mock-8.herokuapp.com/web/user', payload)
    .then(res => {
      return dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      return dispatch({ type: types.REGISTER_FAILURE });
    });
};
