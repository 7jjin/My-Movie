import { createSlice } from "@reduxjs/toolkit";

let koreaMovieList = [];

const initkoreaMovieList = {
  koreaMovieList: koreaMovieList,
};

const koreaMovieListSlice = createSlice({
  name: "koreaMovieList",
  initialState: initkoreaMovieList,
  reducers: {
    isLoading(state, action) {
      state.koreaMovieList = action.payload;
    },
  },
});

export default koreaMovieListSlice.reducer;
export const koreaMovieListAction = koreaMovieListSlice.actions;
