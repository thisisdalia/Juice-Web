import React, { Fragment } from "react";

import classes from "../styles/Sign.module.css";

function Sign() {
  return (
    <Fragment>
      <div className={classes["main-sign"]}>
        <div className={classes["sign-wrapper"]}>
          <div className={classes["sign-title"]}>
            <h1>JUICE</h1>
            <h3>JUS</h3>
          </div>
          <form className={classes["sign-form"]}>
            <label>SIGN-UP</label>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
          </form>
          <div className={classes["sign-btn"]}>
            <button >sign-in</button>
          </div>
          <div className={classes["sign-log"]}>
            <p>Already have an account?</p>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sign;
