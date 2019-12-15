import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Class Chart from Chart.js under components dir
import Chart from "./components /Chart";
//read csv to table
import ReactFileReader from "react-file-reader";
import { CsvToHtmlTable } from "react-csv-to-table";

const sampleData = `
Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`;

//function App() {
class App extends Component {
  state = {
    csvData: null
  };

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
      ScatterData: {
        datasets: [
          {
            //temp
            label: "Temperature",
            data: [
              { x: 60, y: 58 },
              { x: 63, y: 60 },
              { x: 33, y: 203 },
              { x: 12, y: 20 },
              { x: 56, y: 90 },
              { x: 72, y: 11 }
            ],

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
      },
      chartData: {
        labels: [
          //temp
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

            data: [60, 63, 33, 12, 56, 72], //temp

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

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      this.setState({
        csvData: reader.result,
        layout: {
          padding: {
            left: 50,
            right: 50,
            bottom: 0,
            top: 0
          }
        }
      });
    };
    reader.readAsText(files[0]);
  };

  render() {
    return (
      <div className="App">
        <ReactFileReader
          multipleFiles={false}
          fileTypes={[".csv"]}
          handleFiles={this.handleFiles}
        >
          <button className="btn">Upload</button>
        </ReactFileReader>{" "}
        <CsvToHtmlTable
          data={this.state.csvData || sampleData}
          csvDelimiter=","
          tableClassName="table table-striped table-hover"
        ></CsvToHtmlTable>
        <Chart
          ScatterData={this.state.ScatterData}
          chartData={this.state.chartData}
          location="Test Floor"
          legendPosition="bottom"
        ></Chart>
      </div>
    );
  }
}
export default App;
