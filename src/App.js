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
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Populations ",
            //main out components passing it to the Properties and back in to state
            data: [617594, 181045, 153060, 106519, 105162, 95072],
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        ></Chart>
      </div>
    );
  }
}
export default App;
