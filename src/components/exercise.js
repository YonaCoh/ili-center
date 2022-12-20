import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import TableUI from "../UI/TableUI";
import ButtonUI from "../UI/buttonUI";
import { workoutActions } from "../store/workout-slice";
import { exerciseActions } from "../store/exercise-slice";

const Exercise = () => {
  const excName = useSelector((state) => state.exercise.excName);
  const currentSet = useSelector((state) => state.exercise.currentSet);
  const exerciseData = useSelector((state) => state.exercise);
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);
  const [isFinishedExercise, setIsFinishedExercise] = useState(false);
  const [clickedCell, setClickedCell] = useState("");

  const ValidateCurrentSet = (e) => {
    const cellId = e.target.id.slice(-1);
    if (cellId <= currentSet) return true;
    return false;
  };

  const editCell = (e) => {
    if (!ValidateCurrentSet(e)) {
      alert("Wrong set, Please fill in set no. " + currentSet);
      return;
    }
    const currentValue = e.target.innerHTML;
    setClickedCell(e.target.id);
    e.target.innerHTML = `<input id="curInput" type="number"style={{ display: isClicked ? "block" : "none" value='${currentValue}'}}></input>`;
    setIsClicked(true);
    const input = document.getElementById("curInput");
    input.focus();
  };

  const submitChange = (e) => {
    const inputValue = document.getElementById("curInput").value;
    const weightOrReps = clickedCell.slice(0, -2);
    if (weightOrReps === "reps" && inputValue < 0 && inputValue > 15) {
      alert("Invalid input. Repetitions need to be between 1-15");
      return;
    }
    if (weightOrReps === "weight" && inputValue < 0 && inputValue > 200) {
      alert("Invalid input. Weight need to be between 1-200");
      return;
    }
    const clickedSet = clickedCell.slice(-1) * 1;

    document.getElementById(clickedCell).innerHTML = `${inputValue}`;
    setIsClicked(false);

    dispatch(
      exerciseActions.submitExerciseData({
        weightOrReps,
        clickedSet,
        inputValue,
      })
    );
    // debugger;
    // console.log(currentSet);

    if (currentSet === 4) {
      setIsFinishedExercise(true);
    }
  };
  const finishExercise = () => {
    dispatch(workoutActions.submitData(exerciseData));
    dispatch(exerciseActions.finishExercise);
  };

  return (
    <>
      <h1>{excName}</h1>
      <TableUI method={editCell} />
      {isClicked && <ButtonUI name="אישור" handler={submitChange} />}
      {/* {isFinishedExercise && ( */}
      <ButtonUI name="סיום אימון" handler={finishExercise} />
      {/* )} */}
    </>
  );
};

export default Exercise;
