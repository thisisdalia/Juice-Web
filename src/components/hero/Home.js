import React, { Fragment } from "react";

// import Sign from "./Sign";

import Juice1 from "./Juice1";
import GreenJuice from "./GreenJuice";
import Juice2 from "./Juice2";
import OrangeJuice from "./OrangeJuice";
import Juice3 from "./Juice3";
import RedJuice from "./RedJuice";
import Footer from "./Footer";

function Home() {
  return (
    <Fragment>
      <Juice1 />
      <GreenJuice />
      <Juice2 />
      <OrangeJuice />
      <Juice3 />
      <RedJuice />
      <Footer />
      {/* <Sign /> */}
    </Fragment>
  );
}

export default Home;
