import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counterApp',
  initialState: { value: 0 },
  reducers: {
    increment: (state,action) => {
      state.value = state.value+action.payload;
    },
    decrement: (state,action) => {
      state.value = state.value-action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  }
});

// export actions for component usage
export const { increment, decrement, reset } = counterSlice.actions;

// export reducer for store setup
export default counterSlice.reducer;
