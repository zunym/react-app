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
              fontSize: 25,
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
        <Scatter
          data={{
            datasets: [{
              label: 'Scatter Dataset',
              data: [
                { x: 60, y: 58},
                { x: 63, y: 60},
                { x: 33, y: 203},
                { x: 12, y: 20},
                { x: 56, y: 90},
                { x: 72, y: 11},
                { x: 68, y: 70},
                { x: 62, y: 40},
                { x: 30, y: 23},
                { x: 10, y: 21},
                { x: 46, y: 89},
                { x: 78, y: 61},
              ]
          }]
          }}
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
            scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
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
        ></ Scatter>
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

      </div>
    );
  }
}

export default Chart;

//Scatter Plot
//csv + table
//api + server