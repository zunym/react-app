const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./sql-utils");

const fs = require("fs");
const uuidv4 = require("uuid/v4");

module.exports = function(pool) {
  console.log("in my sql library");
  const router = express.Router();

  //Testing mysql
  router.get("/", (req, resp) => resp.send("Hello World!"));

  //endpoint for testing (admin)
  const sqlCountEntry = "SELECT* FROM sysinv_records LIMIT 0,10";
  const countEntry = utils.makeQuery(sqlCountEntry, pool);
  router.get("/date", function(req, resp, next) {
    countEntry()
      .then(results => {
        resp.json(results);
      })
      .catch(err => {
        resp.status(500).json({
          errors: {
            "Get Count Entry Error": "SQL error message => " + err.sqlMessage
          }
        });
      });
  });

  //endpoint for vtg

  //endpoint for temp

  //endpoint for current

  return router;
};
