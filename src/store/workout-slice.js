import { createSlice, current } from "@reduxjs/toolkit";

const initialWorkoutState = {
  type: "test",
  isChosen: false,
  A: {
    exercises: [
      { name: "לחיצת חזה", data: null },
      { name: "פרפר", data: null },
      { name: "יד אחורית", data: null },
      { name: "סקווט", data: null },
      { name: "לאנדג'", data: null },
      { name: "דד ליפט", data: null },
    ],
  },
  B: {
    exercises: [
      { name: "מתח", data: null },
      { name: "חתירה", data: null },
      { name: "כפיפת מרפקים", data: null },
      { name: "הרמת פלטה", data: null },
      { name: "דחיקת כתף", data: null },
      { name: "הרחקת כתפיים", data: null },
    ],
  },
};

const workoutSlice = createSlice({
  name: "Workout menu",
  initialState: initialWorkoutState,
  reducers: {
    chooseWorkout(state, action) {
      state.type = action.payload;
      state.isChosen = true;
    },
    submitData(state, action) {
      debugger;
      const pick = (obj, arr) =>
        arr.reduce(
          (acc, record) => (record in obj && (acc[record] = obj[record]), acc),
          {}
        );
      const exercises = state[state.type].exercises;
      const exerciseData = pick(action.payload, ["weight", "repetitions"]);
      const exercise = (exercises.find(
        (element) => element.name === action.payload.excName
      ).data = exerciseData);
      console.log(current(state));
      // TODO
      //exercises.find(excName).data = exercisesData
    },
  },
});

export const workoutActions = workoutSlice.actions;
export default workoutSlice.reducer;
