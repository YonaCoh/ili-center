import { useDispatch, useSelector } from "react-redux";

import classes from "../assets/Auth.module.css";
import { workoutActions } from "../store/workout-slice";
import ButtonUI from "../UI/buttonUI";
import Exercises from "./exercises";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ChooseWorkout = () => {
  const dispatch = useDispatch();

  const chosenWorkout = useSelector((state) => state.workout.type);
  const isChosen = useSelector((state) => state.workout.isChosen);

  const chooseWorkout = (e) => {
    dispatch(workoutActions.chooseWorkout(e.target.innerText));
  };

  return (
    <main className={classes.auth}>
      {!isChosen && (
        <>
          <ButtonUI name="A" handler={chooseWorkout} />
          <ButtonUI name="B" handler={chooseWorkout} />
        </>
      )}
      {isChosen && <Exercises />}
    </main>
  );
};
export default ChooseWorkout;
