import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="loading..."
      style={{ display: "block", width: "200px", margin: "0 auto" }}
    />
  </Fragment>
);

export default Spinner;
