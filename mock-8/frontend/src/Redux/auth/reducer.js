import * as types from './actionTypes';
const initialState = {
//  logdata:[],
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

 export const reducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type){
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth:true,
      //  logdata:payload,
        token:payload,
        isLoading: false,
      
      }
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,

      };

    }
      case types.REGISTER_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case types.REGISTER_SUCCESS: {
        return {
          ...state,
          isAuth:true,
          token:payload,
          isLoading: false,
        
        }
      }
      case types.REGISTER_FAILURE: {
        return {
          ...state,
          isAuth: false,
          token: "",
          isLoading: false,
          isError: true,
  
        };
    }
    default: {
      return state;

    }
  }
};