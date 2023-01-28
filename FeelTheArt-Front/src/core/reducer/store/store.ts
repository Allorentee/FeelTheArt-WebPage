import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

export const appStore = configureStore({
  reducer: {
    user: useReducer,
  },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
