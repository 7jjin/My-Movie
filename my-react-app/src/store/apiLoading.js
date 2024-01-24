import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const apiLoadingSlice = createSlice({
  name: "apiLoading",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default apiLoadingSlice.reducer;
export const apiLoadingAction = apiLoadingSlice.actions;
