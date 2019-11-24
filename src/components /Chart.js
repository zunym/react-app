import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut, Scatter } from "react-chartjs-2";

//Scatter Plot
//csv
//api + server

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
        CHART COMPONENT
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
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
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
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
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
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
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
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
      </div>
    );
  }
}

export default Chart;
