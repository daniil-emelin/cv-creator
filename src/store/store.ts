import { configureStore } from "@reduxjs/toolkit";

import cvReducer from "./cv/slice";

export const store = configureStore({
  reducer: {
    cv: cvReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
