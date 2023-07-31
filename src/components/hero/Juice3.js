import React, { Fragment } from "react";

import classes from "../styles/Juice1-3.module.css";

import Button from "../UI/Button";

function Juice3() {
  return (
    <Fragment>
      <div className={classes["main-j3"]}>
        <div className={classes["j3-img"]}>
          <img src={require("../../assets/pink-juice.jpg")} alt="" />
        </div>
        <div className={classes["j3-text"]}>
          <h1>Apple & Beet </h1>
          <h6>Mix With</h6>
          <Button className={classes["j3-btn1"]}>Carrot * Lemon </Button>
          <p>parties festivals or whatever you call a good time!</p>
          <Button className={classes["j3-btn2"]}>Shop Flavor</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Juice3;
