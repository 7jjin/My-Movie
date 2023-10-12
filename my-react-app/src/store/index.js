import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./maintitle_h1";

const store = configureStore({
  reducer: { title: titleSlice },
});

export default store;
