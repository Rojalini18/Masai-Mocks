export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const RESULT = "RESULT";
export const GET_DATA_ERROR = "GET_DATA_ERROR";

export const getDataLoading = (payload) => ({
  type: GET_DATA_LOADING,
  payload,
});

export const Result = (correct, incorrect) => ({
  type: RESULT,
  correct,
  incorrect,
});

