import { createSlice } from "@reduxjs/toolkit";

const initialState = { displayValue: new Array(9).fill(null), xNext: false };

const tictactoeSlice = createSlice({
  name: "tictactoe",
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.xNext
        ? (state.displayValue[action.payload] = "O")
        : (state.displayValue[action.payload] = "X");
      state.xNext = !state.xNext;
    },
    reset: (state) => {
      state.displayValue = new Array(9).fill(null);
      state.xNext = false;
    },
  },
});
export const selectValue = (state) => state.tictactoe.displayValue;
export const { addValue, reset } = tictactoeSlice.actions;
export default tictactoeSlice.reducer;
