import { applyMiddleware, compose, combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


const wsUrl = "wss://norma.nomoreparties.space/orders";

const reduсers = combineReducers({

});

const preloadedState = {};

export const store = configureStore({
  reducer: reduсers,
  middleware: (thunkmiddleware) =>
    thunkmiddleware({ serializableCheck: false }).concat(
      
    ),
  preloadedState,
  devTools: true,
});

export type RootState  = ReturnType<typeof reduсers>;
export type TDispatch = typeof store.dispatch;