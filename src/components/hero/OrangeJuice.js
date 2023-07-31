import React, { Fragment } from "react";

import classes from "../styles/OrangeJuice.module.css";

function OrangeJuice() {
  return (
    <Fragment>
      <div className={classes["main-org"]}>
        <div className={classes["org-title"]}>
          <h1>TASTE THE ORANGE</h1>
          <h5>Orange Fruits</h5>
        </div>
        <div className={classes["org-img"]}>
          <img
            src={require("../../assets/orange-j1.jpg")}
            alt=""
            className={classes["org-img1"]}
          />
          <img
            src={require("../../assets/orange-j2.jpg")}
            alt=""
            className={classes["org-img2"]}
          />
          <img
            src={require("../../assets/orange-j3.jpg")}
            alt=""
            className={classes["org-img3"]}
          />
          <img
            src={require("../../assets/orange-j4.jpg")}
            alt=""
            className={classes["org-img4"]}
          />
          <img
            src={require("../../assets/orange-j5.jpg")}
            alt=""
            className={classes["org-img5"]}
          />
        </div>
        <div className={classes["org-desc"]}>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui,
            nemo doloremque dolor perspiciatis <br></br> reiciendis repudiandae
            minus, ratione error eveniet, recusandae similique ut soluta.
            Corrupti harum placeat porro.
          </p>
        </div>
        <div className={classes["org-btn"]}>
          <button type="button">shop</button>
        </div>
      </div>
    </Fragment>
  );
}

export default OrangeJuice;
