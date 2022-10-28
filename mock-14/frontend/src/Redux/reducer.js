import { GET_DATA_LOADING, RESULT } from "./action";

const initState = {
  correct: Number,
  incorrect: Number,
  data: [],
};

export const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case RESULT:
      return {
        ...state,
        correct: action.correct,
        incorrect: action.incorrect,
      };
    default:
      return state;
  }
};
