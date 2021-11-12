import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  value: number;
  prevValue: number;
}

const initialState: Counter = {
  value: 0,
  prevValue: 0,
};

const counterSplice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.prevValue = state.value;
      state.value += 1;
    },
    decrement(state) {
      state.prevValue = state.value;
      state.value -= 1;
    },
  },
});

// export reducer as default
export default counterSplice.reducer;
// export action
export const { increment, decrement } = counterSplice.actions;
