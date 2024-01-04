import { configureStore } from "@reduxjs/toolkit";
import tictactoeReducer from "./tictactoeSlice";
import groceryReducer from "./grocerySlice";
import todoReducer from "./todoSlice";
import quoteReducer from "./quoteSlice";
import menuReducer from "./menuSlice";

export default configureStore({
  reducer: {
    tictactoe: tictactoeReducer,
    grocery: groceryReducer,
    toDo: todoReducer,
    randomQuote: quoteReducer,
    menu: menuReducer,
  },
});
