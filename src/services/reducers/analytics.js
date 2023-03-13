import {
  GET_ANALYTICS_REQUEST,
  GET_ANALYTICS_SUCCESS,
  GET_ANALYTICS_FAILED,
} from "../actions/analytics";

const initialState = {
  allAnalytic: null,
  isLoad: false,
  isError: false,
};

export const analyticReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANALYTICS_REQUEST:
      return {
        ...state,
        isError: false,
        isLoad: true,
      };
    case GET_ANALYTICS_SUCCESS:
      return {
        ...state,
        allAnalytic: action.payload,
        isLoad: false,
        isError: false,
      };

    case GET_ANALYTICS_FAILED:
      return {
        ...state,
        error: true,
        isLoad: false,
      };

    default:
      return state;
  }
};
