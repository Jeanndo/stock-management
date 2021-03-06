import React from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.NavItems}>
        <li className={classes.ListItems}>
          <Link to="/login" style={{ textDecoration: "none", float: "right" }}>
            LOGIN
          </Link>
        </li>
        <li className={classes.ListItems}>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            SIGN UP
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
