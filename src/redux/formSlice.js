import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  itemToDo: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
};

const formSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const addToDo = {
        id: Math.floor(Math.random() * Date.now()),
        date: `${new Date().toLocaleDateString("en-GB")}`,
        time: `${new Date().getHours()}:${
          new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes()
        }`,
        content: action.payload.content,
      };
      state.itemToDo.push(addToDo);
      localStorage.setItem("items", JSON.stringify(state.itemToDo));
    },
    deleteItem: (state, action) => {
      console.log(action.payload);
      const deleteFilter = state.itemToDo.filter(
        (item) => item.id !== action.payload
      );
      state.itemToDo = deleteFilter;
      localStorage.setItem("items", JSON.stringify(state.itemToDo));
    },
  },
});

export const { addItem, deleteItem } = formSlice.actions;
export default formSlice.reducer;
