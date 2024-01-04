import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [{ id: "todo1", title: "react exercise" }],
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: `todo${state.length + 1}`,
        title: action.payload,
      };
      state.push(todo);
    },
    deleteToDo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editToDo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const list = [...state];
      list[index].title = action.payload.title;
      state = list;
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, deleteToDo, editToDo } = todoSlice.actions;
