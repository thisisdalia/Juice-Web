import React, { Fragment } from "react";

import classes from "../styles/GreenJuice.module.css";

function GreenJuice() {
  return (
    <Fragment>
      <div className={classes["main-gre"]}>
        <div className={classes["gre-title"]}>
          <h1>TASTE THE GREEN</h1>
          <h5>Green Fruits</h5>
        </div>
        <div className={classes["gre-img"]}>
          <img
            src={require("../../assets/green-j1.jpg")}
            alt=""
            className={classes["gre-img1"]}
          />
          <img
            src={require("../../assets/green-j2.jpg")}
            alt=""
            className={classes["gre-img2"]}
          />
          <img
            src={require("../../assets/green-j3.jpg")}
            alt=""
            className={classes["gre-img3"]}
          />
        </div>
        <div className={classes["gre-desc"]}>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui,
              nemo doloremque dolor perspiciatis <br></br> reiciendis repudiandae minus,
              ratione error eveniet, recusandae similique ut soluta. Corrupti
              harum placeat porro.  </p>
        </div>
        <div className={classes["gre-btn"]}>
          <button type="button">shop</button>
        </div>
      </div>
    </Fragment>
  );
}

export default GreenJuice;
