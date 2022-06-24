import { configureStore } from "@reduxjs/toolkit";
import matchesSlice from "./matches-slice";

const store = configureStore({
  reducer: {
    matches: matchesSlice.reducer,
  },
});

export default store;
