import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./lineGraph.module.css";

//Chart-style
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;

export default class lineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [
          "1 Mo",
          "2 Mo",
          "3 Mo",
          "6 Mo",
          "1 Yr",
          "2 Yr",
          "3 Yr",
          "5 Yr",
          "7 Yr",
          "10 Yr",
          "20 Yr",
          "30 Yr"
        ],
        datasets: [
          {
            label: "Constant Maturity Treasury Rates",
            data: [
              1.45,
              1.37,
              1.27,
              1.11,
              0.97,
              0.86,
              0.85,
              0.89,
              1.03,
              1.13,
              1.46,
              1.65
            ]
          }
        ]
      },
      options: {}
    });
  };

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
