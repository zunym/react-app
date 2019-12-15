require("dotenv").config();
const express = require("express");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");

//local library
const apiMySql = require("./libs/api_mysql");

//db credential
const dbConfig = require("./db/dbConfig");
const connection = require("./db/dbConnection");

//Databases pool definition
const pool = mysql.createPool(require("./dbconfig"));
const poolsgpmoms = mysql.createPool(dbConfig.mysqlSgpmoms);

//Databases routing
//const apiProdRouter = apiV5(pool);
const apiMySqlRouter = apiMySql(poolsgpmoms);

const app = express();
app.use(cors());
app.use("/api/mysql/", apiMySqlRouter);
app.use(express.static(path.join(__dirname, "public")));

// *******************************************************************
// Check connection to application databases before starting eg mysql sgpmoms
// *******************************************************************
connection.checkConnection(poolsgpmoms);

// *******************************************************************
// Start the server
// Ping and check the user database before starting
// *******************************************************************
pool.getConnection((err, conn) => {
  if (err) {
    console.error("STARTUP ERROR: ", err);
    process.exit(-1);
  }
  conn.ping(err => {
    //fail ping to dbconfig
    if (err) {
      console.error("PING ERROR: ", err);
      process.exit(-1);
    }

    //successfully ping to dbconfig
    conn.release();

    const PORT =
      parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;
    app.listen(PORT, () => {
      console.info("Application started on PORT %d at %s", PORT, new Date());
    });
  });
});
