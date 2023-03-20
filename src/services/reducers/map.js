import { SET_MAP, SET_COORDINATES, RESET_COORDINATES } from "../actions/map";

const initialState = {
  map: null,
  coordinates: [],
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
        map: action.payload,
      };

    case SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };

    case RESET_COORDINATES:
      return {
        ...state,
        coordinates: initialState.coordinates,
      };

    default:
      return state;
  }
};
