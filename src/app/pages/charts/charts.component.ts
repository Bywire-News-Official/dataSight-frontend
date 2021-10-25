import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import {
  chartOptions,
  parseOptions,
  chartBarStackedData,
  chartDoughnutData,
  chartPieData,
  chartPointsData,
  chartSalesData,
  chartBarsData
} from "../../variables/charts";

@Component({
  selector: "app-charts",
  templateUrl: "charts.component.html"
})
export class ChartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    parseOptions(Chart, chartOptions());
    //
    // chart bar stacked
    // Variables
    var chartBarStacked = document.getElementById("chart-bar-stacked");

    // Init chart
    var barStackedChart = new Chart(chartBarStacked, {
      type: "bar",
      data: chartBarStackedData.data,
      options: chartBarStackedData.options
    });

    //
    // chart doughnut
    // Variables
    var chartDoughnut = document.getElementById("chart-doughnut");

    // Init chart
    var doughnutChart = new Chart(chartDoughnut, {
      type: "doughnut",
      data: chartDoughnutData.data,
      options: chartDoughnutData.options
    });

    //
    // chart pie
    // Variables
    var chartPie = document.getElementById("chart-pie");

    // Init chart
    var pieChart = new Chart(chartPie, {
      type: "pie",
      data: chartPieData.data,
      options: chartPieData.options
    });

    //
    // chart points
    // Variables
    var chartPoints = document.getElementById("chart-points");

    // Init chart
    var pointsChart = new Chart(chartPoints, {
      type: "line",
      data: chartPointsData.data,
      options: chartPointsData.options
    });

    //
    // chart sales
    // Variables
    var chartSales = document.getElementById("chart-sales2");

    // Init chart
    var salesChart = new Chart(chartSales, {
      type: "line",
      data: chartSalesData.data,
      options: chartSalesData.options
    });

    //
    // chart bars
    // Variables
    var chartBars = document.getElementById("chart-bars2");

    // Init chart
    var barsChart = new Chart(chartBars, {
      type: "bar",
      data: chartBarsData.data
    });
  }
}
