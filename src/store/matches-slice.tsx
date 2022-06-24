import { createSlice } from "@reduxjs/toolkit";

const matchesInitialState = {
  matches: [],
};

const matchesSlice = createSlice({
  name: "matches",
  initialState: () => matchesInitialState,
  reducers: {
    setMatches(state, action) {
      state.matches = action.payload;
    },
  },
});

export const matchesActions = matchesSlice.actions;

export default matchesSlice;
