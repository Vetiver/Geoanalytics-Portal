import {
  GET_ANALYTICS_REQUEST,
  GET_ANALYTICS_SUCCESS,
  GET_ANALYTICS_FAILED,
  GET_PIE_SUCCESS,
  GET_VERTICAL_SUCCESS,
  GET_ARABLE_METRIC_SUCCESS,
  GET_FOREST_METRIC_SUCCESS,
} from "../actions/analytics";

const initialState = {
  allAnalytics: null,
  pieAnalytics: null,
  verticalAnalytics: null,
  arableLandMetrics: null,
  forestMetrics: null,
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
        allAnalytics: action.payload,
        isLoad: false,
        isError: false,
      };

    case GET_ANALYTICS_FAILED:
      return {
        ...state,
        error: true,
        isLoad: false,
      };
    case GET_PIE_SUCCESS:
      return {
        ...state,
        pieAnalytics: action.payload
      };
    case GET_VERTICAL_SUCCESS:
      return {
        ...state,
        verticalAnalytics: action.payload
      };
      case GET_FOREST_METRIC_SUCCESS:
      return {
        ...state,
        forestMetrics: action.payload
      };
      case GET_ARABLE_METRIC_SUCCESS:
      return {
        ...state,
        arableLandMetrics: action.payload
      };

    default:
      return state;
  }
};
