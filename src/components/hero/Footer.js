import { Fragment } from "react";

import classes from "../styles/Footer.module.css";

function Footer() {
  return (
    <Fragment>
      <div className={classes["main-footer"]}>
        <div className={classes["footer-title"]}>
          <h1>HOPE YOU ENJOY OUR DRINKS</h1>
        </div>
        <div className={classes["footer-hero"]}>
          <div className={classes["footer-img"]}>
            <img src={require("../../assets/juices.jpg")} alt="" />
          </div>
          <div className={classes["footer-icon"]}>
           
            <ul>
              <img
                src={require("../../assets/linkedin-icon.png")}
                alt=""
                className={classes.icon1}
              />
              <img
                src={require("../../assets/youtube-icon.png")}
                alt=""
                className={classes.icon2}
              />
              <img
                src={require("../../assets/facebook-icon.png")}
                alt=""
                className={classes.icon3}
              />
              <img
                src={require("../../assets/twitter-icon.png")}
                alt=""
                className={classes.icon4}
              />
              <img
                src={require("../../assets/instagram-icon.png")}
                alt=""
                className={classes.icon5}
              />
              <img
                src={require("../../assets/pinterest-icon.png")}
                alt=""
                className={classes.icon6}
              />
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
