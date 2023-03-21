import { SET_MAP, SET_COORDINATES, RESET_COORDINATES, TOGGLE_FOREST, TOGGLE_AGRO } from "../actions/map";

const initialState = {
  map: null,
  coordinates: [],
  forestCheck: true,
  agroCheck: true,
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
    case TOGGLE_FOREST:
      return {
        ...state,
        forestCheck: !state.forestCheck,
      };
    case TOGGLE_AGRO:
      return {
        ...state,
        agroCheck: !state.agroCheck,
      };

    default:
      return state;
  }
};
