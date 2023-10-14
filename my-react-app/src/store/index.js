import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./maintitle_h1";
import TodayMovieChartSlice from "./todayMovieChart";
import contentSlice from "./content";

const store = configureStore({
  reducer: { title: titleSlice, todayMovieChart: TodayMovieChartSlice, content: contentSlice },
});

export default store;
