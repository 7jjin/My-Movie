import { createSlice } from "@reduxjs/toolkit";

let movieChartList = [];

const initWeekendMovieChart = {
  weekendMovieList: movieChartList,
};

const WeekendMovieChartSlice = createSlice({
  name: "WeekendMovieChart",
  initialState: initWeekendMovieChart,
  reducers: {
    isLoading(state, action) {
      state.weekendMovieList = action.payload;
    },
  },
});

export default WeekendMovieChartSlice.reducer;
export const WeekendMovieChartAction = WeekendMovieChartSlice.actions;
