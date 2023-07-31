import React, { Fragment } from "react";

import classes from "../styles/Juice1-3.module.css";

import Button from "../UI/Button";

function Juice1() {
  return (
    <Fragment>
      <div className={classes["main-j1"]}>
        <div className={classes["j1-img"]}>
          <img src={require("../../assets/green-juice.jpg")} alt="" />
        </div>
        <div className={classes["j1-text"]}>
          <h1>Cabbage & Lemon </h1>
          <h6>Mix With</h6>
          <Button className={classes["j1-btn1"]}>
            Pineapple * Ginger * Apple
          </Button>
            <p>an adventure , a low-key drink or a healthy nightcap!</p>
          <Button className={classes["j1-btn2"]}>Shop Flavor</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Juice1;
