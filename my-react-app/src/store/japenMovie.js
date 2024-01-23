import { createSlice } from "@reduxjs/toolkit";

let japenMovieList = [];

const initjapenMovieList = {
  japenMovieList: japenMovieList,
};

const japenMovieListSlice = createSlice({
  name: "japenMovieList",
  initialState: initjapenMovieList,
  reducers: {
    isLoading(state, action) {
      state.japenMovieList = action.payload;
    },
  },
});

export default japenMovieListSlice.reducer;
export const japenMovieListAction = japenMovieListSlice.actions;
