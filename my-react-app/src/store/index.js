import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./maintitle_h1";
import TodayMovieChartSlice from "./todayMovieChart";
import contentSlice from "./content";
import koreaMovieListSlice from "./koreaMovie";
import genreListSlice from "./genreButton";

const store = configureStore({
  reducer: {
    title: titleSlice,
    todayMovieChart: TodayMovieChartSlice,
    content: contentSlice,
    koreaMovieList: koreaMovieListSlice,
    genreList: genreListSlice,
  },
});

export default store;
