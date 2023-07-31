import React, { Fragment } from "react";

import classes from "../styles/Head.module.css";

function Head() {
  return (
    <Fragment>
      <div className={classes["main-head"]}>
        <div className={classes["head-title"]}>
          <h1>JUICE</h1>
          <h3>TASTE THE COLORS</h3>
        </div>
        <div className={classes["head-img"]}>
          <img src={require("../../assets/juices-designed.jpg")} alt="" />
        </div>
        <div className={classes["head-text"]}>
          <h1>Drink Better. Mix Avec.</h1>
          <p>
            Lorem ipsum dolor si adipisicing elit. Sit qui, nemo doloremque
            dolor perspiciatis <br></br> minus, que ut soluta. Corrupti harum
            placeat porro facilis incidunt magnam nam ex deleniti hic. Amet
            doloremque.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Head;
