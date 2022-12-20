import { useSelector, useDispatch } from "react-redux";
import classes from "../assets/Header.module.css";

// import { authActions } from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Ili Center</h1>
    </header>
  );
};

export default Header;
