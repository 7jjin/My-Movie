import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./maintitle_h1";
import TodayMovieChartSlice from "./todayMovieChart";
import contentSlice from "./content";
import koreaMovieListSlice from "./koreaMovie";
import japenMovieListSlice from "./japenMovie";
import usMovieListSlice from "./UsMovie";
import etcMovieListSlice from "./etcMovie";
import genreListSlice from "./genreButton";

const store = configureStore({
  reducer: {
    title: titleSlice,
    todayMovieChart: TodayMovieChartSlice,
    content: contentSlice,
    koreaMovieList: koreaMovieListSlice,
    japenMovieList: japenMovieListSlice,
    usMovieList: usMovieListSlice,
    etcMovieList: etcMovieListSlice,
    genreList: genreListSlice,
  },
});

export default store;
