import { configureStore } from "@reduxjs/toolkit";

// import authReducer from "./auth-slice";
// import trainerAuthReducer from "./trainerAuth-slice";
// import muscleGroupReducer from "./muscleGroup-slice";
// import exercisesSliceReducer from "./exercises-slice";
import exerciseReducer from "./exercise-slice";
import workoutReducer from "./workout-slice";
import headerReducer from "./header-silce";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // trainerAuth: trainerAuthReducer,
    // muscleGroup: muscleGroupReducer,
    exercise: exerciseReducer,
    workout: workoutReducer,
    header: headerReducer,
  },
});

export default store;
