import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { analyticReducer } from "../reducers/analytics";

const rootReducer = combineReducers({
  analyticReducer: analyticReducer,
});

const preloadedState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  devTools: true,
});
