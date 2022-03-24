import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "./formSlice";
import darkReducer from "./darkMode"

export const store = configureStore({
  reducer: { todos: todoReducer, darkMode: darkReducer },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});
