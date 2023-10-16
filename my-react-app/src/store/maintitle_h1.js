import { createSlice } from "@reduxjs/toolkit";

const initTitle = {
  title: "일별 박스오피스",
};
const titleSlice = createSlice({
  name: "title",
  initialState: initTitle,
  reducers: {
    TodayBoxOffice(state) {
      state.title = "일별 박스오피스";
    },
    WeekendBoxOffice(state) {
      state.title = "주간 박스오피스";
    },
  },
});

export default titleSlice.reducer;
export const titleAction = titleSlice.actions;
