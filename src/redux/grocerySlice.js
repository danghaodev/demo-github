import { createSlice } from "@reduxjs/toolkit";

export const grocerySlice = createSlice({
  name: "grocery",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = {
        id: `item${state.length + 1}`,
        item: action.payload,
      };
      state.push(item);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      let list = [...state];
      list[index].item = action.payload.item;
      state = list;
    },
  },
});

export default grocerySlice.reducer;

export const { addItem, deleteItem, editItem } = grocerySlice.actions;
