import { createSlice } from "@reduxjs/toolkit";

const genreListSlice = createSlice({
  name: "genreList",
  // 초기 상태: 선택한 장르가 없으므로 빈 배열
  initialState: [],
  reducers: {
    toggle(state, action) {
      // action.payload에 클릭된 장르 이름이 전달됩니다.
      const genre = action.payload;
      console.log(action);

      if (state.includes(genre)) {
        // 이미 선택한 장르라면 배열에서 제거
        return state.filter((item) => item !== genre);
      } else {
        // 새로운 장르를 선택하면 배열에 추가
        return [...state, genre];
      }
    },
  },
});

export default genreListSlice.reducer;
export const genreListAction = genreListSlice.actions;
