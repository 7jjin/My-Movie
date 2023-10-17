// appSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const toggleDarkModeAction = appSlice.actions;
export default appSlice.reducer;
