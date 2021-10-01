import { useStyles } from "./styles";
import Navigation from "./Navigation";
import "./Banner.css";

const Landing = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Navigation}>
        <Navigation />
      </div>
      <div className={`${classes.Upper} banner`}>
        <h2 className={classes.heading1}>WELCOME TO STOCK MANAGEMENT SYSTEM</h2>
        <img
          style={{ width: "1000px", height: "400px", marginLeft: "160px" }}
          alt="stock"
          src="https://cdn.pixabay.com/photo/2014/09/04/11/03/supermarket-435452_960_720.jpg"
        />
      </div>
    </>
  );
};

export default Landing;
