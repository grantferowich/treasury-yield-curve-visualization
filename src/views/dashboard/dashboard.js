import React, { Component } from "react";
import classes from "./dashboard.module.css";
import LineGraph from "../../components/dashboard/lineGraph";

export default class dashboard extends Component {
  render() {
    return (
      <div className={classes.container}>
        <header>
          <h1>Treasury Yield Curve - Time to Maturity</h1>
        </header>
        <LineGraph></LineGraph>
      </div>
    );
  }
}
