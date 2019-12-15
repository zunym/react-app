//
// Config file containing all database connection access info
//

module.exports = {
  mysqlSgpmoms: {
    host: "9.56.197.146", // "9.127.69.37",
    port: 3306,
    user: "stelacmduser",
    password: "",
    database: "stela_zlab",
    connectionLimit: 4
    //p0int@srvr
  },

  mysqlAuth: {
    host: "localhost",
    port: 3306,
    user: "bunny",
    password: "zonlay1981",
    database: "coc",
    connectionLimit: 4
  }
};
