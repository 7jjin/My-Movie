import { createSlice } from "@reduxjs/toolkit";

const initContent = {
  content: "stillCut",
};

const contentSlice = createSlice({
  name: "content",
  initialState: initContent,
  reducers: {
    StillCut(state) {
      state.content = "stillCut";
    },
    RelativeMovie(state) {
      state.content = "relativeMovie";
    },
  },
});

export default contentSlice.reducer;
export const contentAction = contentSlice.actions;
