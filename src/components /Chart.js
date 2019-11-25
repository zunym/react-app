import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut, HorizontalBar, Polar, Scatter } from "react-chartjs-2";

//Component Class extend Component
class Chart extends Component {
  //create state is keeping all of the data
  constructor(props) {
    //fun run when component is Initialized
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  //properties
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  //render method is output to screen
  render() {
    return (

      //JSS [=HTML] Pretty much using classname
      <div className="chart">

        <Bar
          data={this.state.chartData}
          options={{
            title: { //Bar Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></Bar>
        <HorizontalBar
          data={this.state.chartData}
          options={{
            title: { //HorizontalBar Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></HorizontalBar>
        <Line
          data={this.state.chartData}
          options={{
            title: { //Line Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></Line>
        <Pie
          data={this.state.chartData}
          options={{
            title: { //Pie Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></Pie>
        <Doughnut
          data={this.state.chartData}
          options={{
            title: {//Doughnut Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></Doughnut>
        <Polar
          data={this.state.chartData}
          options={{
            title: { //Polar Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></Polar>
        <Scatter
          data={this.state.chartData}
          options={{
            title: { //Scatter Chart Implemented
              display: this.props.displayTitle,
              text: "Systems In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            },
            axisX: {
              title:"Temperature (in °C)",
              suffix: "°C",
              crosshair: {
                enabled: true,
                snapToDataPoint: true
              }
            },
            axisY:{
              title: "Sales",
              includeZero: false,
              crosshair: {
                enabled: true,
                snapToDataPoint: true
              }
            },
            data: [{
              type: "scatter",
              markerSize: 15,
              toolTipContent: "<b>Temperature: </b>{x}°C<br/><b>Sales: </b>{y}",
              dataPoints: [
                { x: 14.2, y: 215},
                { x: 12.9, y: 175},
                { x: 16.4, y: 325},
                { x: 26.9, y: 635},
                { x: 32.5, y: 464},
                { x: 22.1, y: 522},
                { x: 19.4, y: 412},
                { x: 25.1, y: 614},
                { x: 34.9, y: 374},
                { x: 28.7, y: 625},
                { x: 23.4, y: 544},
                { x: 31.4, y: 502},
                { x: 40.8, y: 262},
                { x: 37.4, y: 312},
                { x: 42.3, y: 202},
                { x: 39.1, y: 302},
                { x: 17.2, y: 408}
              ]
            }],
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }} //maintainAspectRatio: false
        ></Scatter>
      </div>
    );
  }
}

export default Chart;

//Scatter Plot
//csv
//api + server