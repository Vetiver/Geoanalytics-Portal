import { SET_MAP } from "../actions/map";

const initialState = {
  map: null,
};

export const analyticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
        map: action.payload,
      };

    default:
      return state;
  }
};
