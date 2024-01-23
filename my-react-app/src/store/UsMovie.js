import { createSlice } from "@reduxjs/toolkit";

let usMovieList = [];

const initusMovieList = {
  usMovieList: usMovieList,
};

const usMovieListSlice = createSlice({
  name: "usMovieList",
  initialState: initusMovieList,
  reducers: {
    isLoading(state, action) {
      state.usMovieList = action.payload;
    },
  },
});

export default usMovieListSlice.reducer;
export const usMovieListAction = usMovieListSlice.actions;
