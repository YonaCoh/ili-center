import { createSlice, current } from "@reduxjs/toolkit";

const initialExerciseSlice = {
  excName: "",
  isChosen: false,
  currentSet: 1,
  weight: [null, null, null],
  repetitions: [null, null, null],
};

const exerciseSlice = createSlice({
  name: "Exercise menu",
  initialState: initialExerciseSlice,
  reducers: {
    chooseExercise(state, action) {
      state.excName = action.payload;
      state.isChosen = true;
    },
    submitExerciseData(state, action) {
      const { weightOrReps, clickedSet, inputValue } = action.payload;
      state[weightOrReps][clickedSet - 1] = inputValue;
      if (
        state.weight[clickedSet - 1] &&
        state.repetitions[clickedSet - 1] &&
        state.currentSet < 4
      ) {
        state.currentSet++;
      }
      if (state.currentSet === 4) {
        debugger;
      }
    },
    finishExercise(state, action) {
      state.isChosen = false;
      state.excName = "";
      state.currentSet = 1;
      state.weight = [null, null, null];
      state.repetitions = [null, null, null];
    },
  },
});

export const exerciseActions = exerciseSlice.actions;
export default exerciseSlice.reducer;
