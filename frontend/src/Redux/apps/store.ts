import { configureStore } from "@reduxjs/toolkit";
import counterSplice from "../features/counter/counter-slice";

const store = configureStore({
  reducer: {
    counter: counterSplice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
