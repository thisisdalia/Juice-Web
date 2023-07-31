import { Fragment, useState } from "react";

import classes from "../styles/Burger.module.css";

function Burger() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [burgerIsTouched, setBurgerIsTouched] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(false);

  function burgerHandler() {
    setBurgerIsTouched(true);
    if (burgerIsTouched) {
      setBurgerClicked(true);
      setMenuIsShown(true);
    }
    if (burgerClicked && menuIsShown) {
      setBurgerClicked(true);
      setMenuIsShown(false);
    }
  }

  const line1Classes = !menuIsShown
    ? classes["line1"]
    : classes["line1-invalid"];
  const line2Classes = !menuIsShown
    ? classes["line2"]
    : classes["line2-invalid"];
  const line3Classes = !menuIsShown
    ? classes["line3"]
    : classes["line3-invalid"];

  const menuClasses = menuIsShown
    ? classes["burger-menu"]
    : classes["burger-menu-invalid"];

  return (
    <Fragment>
      <div className={classes.burger}>
        <div className={classes["main-burger"]} onClick={burgerHandler}>
          <div className={line1Classes}></div>
          <div className={line2Classes}></div>
          <div className={line3Classes}></div>
        </div>
        {menuIsShown && (
          <div className={menuClasses}>
            <menu className={classes.menu1}>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </menu>
            <menu className={classes.menu2}>
              <a href="#">Sign up</a>
              <a href="#">Log In</a>
            </menu>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Burger;
