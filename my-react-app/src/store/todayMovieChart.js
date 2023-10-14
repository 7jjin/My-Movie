import { createSlice } from "@reduxjs/toolkit";

let movieChartList = [];

const initTodayMovieChart = {
  todayMovieList: movieChartList,
};

const TodayMovieChartSlice = createSlice({
  name: "TodayMovieChart",
  initialState: initTodayMovieChart,
  reducers: {
    isLoading(state, action) {
      state.todayMovieList = action.payload;
    },
  },
});

export default TodayMovieChartSlice.reducer;
export const TodayMovieChartAction = TodayMovieChartSlice.actions;
