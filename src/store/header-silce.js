import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  title: "Choose Workout",
};

const headerSlice = createSlice({
  name: "Header",
  initialState: initialAuthState,
  reducers: {
    changeHeader(state, action) {
      state.title = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;
