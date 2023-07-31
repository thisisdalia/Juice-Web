import React, { Fragment } from "react";

import {Switch , Route} from 'react-router-dom'

import Header from "./components/hero/Header";
import Head from "./components/hero/Head";
import Home from "./components/hero/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Head />
      <Home />
    </Fragment>
  );
}

export default App;
