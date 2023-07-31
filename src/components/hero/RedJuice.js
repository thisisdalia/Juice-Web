import React, { Fragment } from "react";

import classes from "../styles/RedJuice.module.css";

function RedJuice() {
  return (
    <Fragment>
      <div className={classes["main-red"]}>
        <div className={classes["red-title"]}>
          <h1>TASTE THE RED</h1>
          <h5>Red Fruits</h5>
        </div>
        <div className={classes["red-img"]}>
          <img
            src={require("../../assets/red-j1.jpg")}
            alt=""
            className={classes["red-img1"]}
          />
          <img
            src={require("../../assets/red-j2.jpg")}
            alt=""
            className={classes["red-img2"]}
          />
          <img
            src={require("../../assets/red-j3.jpg")}
            alt=""
            className={classes["red-img3"]}
          />
        </div>
        <div className={classes["red-desc"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui,
            nemo doloremque dolor perspiciatis <br></br> reiciendis repudiandae
            minus, ratione error eveniet, recusandae similique ut soluta.
            Corrupti harum placeat porro.{" "}
          </p>
        </div>
        <div className={classes["red-btn"]}>
          <button type="button">shop</button>
        </div>
      </div>
    </Fragment>
  );
}

export default RedJuice;
