import { useSelector } from "react-redux"; //Select a slice of the state
import { Fragment } from "react";
import Header from "./components/Header";
import ChooseWorkout from "./components/chooseWorkout";

function App() {
  return (
    <Fragment>
      <Header />
      <div>App component</div>
      <ChooseWorkout />
    </Fragment>
  );
}

export default App;
