import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isDark: false,
};

const darkSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { setDarkMode } = darkSlice.actions;
export default darkSlice.reducer;
