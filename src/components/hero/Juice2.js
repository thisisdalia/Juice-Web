import React, { Fragment } from "react";

import classes from "../styles/Juice2.module.css";

import Button from "../UI/Button";

function Juice2() {
  return (
    <Fragment>
      <div className={classes["main-j2"]}>
        <div className={classes["j2-img"]}>
          <img src={require("../../assets/orange-juice.jpg")} alt="" />
        </div>
        <div className={classes["j2-text"]}>
          <h1>Pineapple </h1>
          <h6>Mix With</h6>
          <Button className={classes["j2-btn1"]}>Carrot * Lemon * Pear</Button>
          <p> a drink with a friend or a day with a happy end</p>
          <Button className={classes["j2-btn2"]}>Shop Flavor</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Juice2;
