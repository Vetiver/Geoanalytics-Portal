import { applyMiddleware, compose, combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {analiticReduser} from '../reducers/analiticReduser'


const wsUrl = "wss://norma.nomoreparties.space/orders";

const reduсers = combineReducers({
  analiticReduser: analiticReduser
});

const preloadedState = {};

export const store = configureStore({
  reducer: reduсers,
  preloadedState,
  devTools: true,
});

export type RootState  = ReturnType<typeof reduсers>;
export type TDispatch = typeof store.dispatch;