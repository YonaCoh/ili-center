import { useDispatch, useSelector } from "react-redux";
import workoutSlice from "../store/workout-slice";
import Exercise from "./exercise";
import ButtonUI from "../UI/buttonUI";

import { exerciseActions } from "../store/exercise-slice";

const Exercises = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.workout.type);
  const exercises = useSelector((state) => state.workout[type].exercises);
  const state = useSelector((state) => state);

  const isChosen = useSelector((state) => state.exercise.isChosen);

  const chooseExercise = (e) => {
    dispatch(exerciseActions.chooseExercise(e.target.innerText));
  };

  return (
    <div>
      EXERICSES COMPONENT
      {!isChosen && (
        <>
          <h1>{type}</h1>
          {exercises.map((exc) => {
            return <ButtonUI name={exc.name} handler={chooseExercise} />;
          })}
        </>
      )}
      {isChosen && <Exercise />}
    </div>
  );
};

export default Exercises;
