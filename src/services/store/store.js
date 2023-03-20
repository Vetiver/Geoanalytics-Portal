import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { analyticReducer } from "../reducers/analytics";
import { mapReducer } from "../reducers/map";

const rootReducer = combineReducers({
  analyticReducer: analyticReducer,
  mapReducer: mapReducer,
});

const preloadedState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  devTools: true,
});
