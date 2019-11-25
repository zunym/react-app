import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Class Chart from Chart.js under components dir
import Chart from "./components /Chart";

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  //lifecycle call webhook
  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //Ajax call here for api
    this.setState({
      chartData: {
        labels: [  //temp 
          "T58",
          "T60",
          "T203",
          "T02",
          "T09",
          "T11"
        ],
        datasets: [
          {
            label: "Temperature ",
            //main out components passing it to the Properties and back in to state
           
            data: [60, 63, 33, 12, 56, 72],  //temp 
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(255,99,132,0.6)"
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="App">

        <Chart
          chartData={this.state.chartData}
          location="Test Floor"
          legendPosition="bottom"
        ></Chart>
      </div>
    );
  }
}
export default App;
