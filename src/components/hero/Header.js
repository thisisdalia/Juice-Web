import { Fragment, useState } from "react";

import Burger from "./Burger";

import classes from "../styles/Header.module.css";

function Header() {
  function jusHandler(e) {}
  return (
    <Fragment>
      <div className={classes["main-header"]}>
        <div className={classes["header-wrapper"]}>
          <h1 onClick={jusHandler}>JUS</h1>
          <Burger></Burger>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
