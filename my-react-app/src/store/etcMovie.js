import { createSlice } from "@reduxjs/toolkit";

let etcMovieList = [];

const initetcMovieList = {
  etcMovieList: etcMovieList,
};

const etcMovieListSlice = createSlice({
  name: "etcMovieList",
  initialState: initetcMovieList,
  reducers: {
    isLoding(state, action) {
      state.etcMovieList = action.payload;
    },
  },
});

export default etcMovieListSlice.reducer;
export const etcMovieListAction = etcMovieListSlice.actions;
