import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./maintitle_h1";
import TodayMovieChartSlice from "./todayMovieChart";

const store = configureStore({
  reducer: { title: titleSlice, todayMovieChart: TodayMovieChartSlice },
});

export default store;
