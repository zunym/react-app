
var checkConnection = function (dbPoolInfo) {
    // *******************************************************************
    // Check connection to data databases before starting eg mysql sgpmoms
    // *******************************************************************
    dbPoolInfo.getConnection((err, conn) => {
        dbDatabase = dbPoolInfo.config.connectionConfig.database;
        dbHost = dbPoolInfo.config.connectionConfig.host;
        if (err) {
            console.error('CONNECTION ERROR TO ',dbHost,' Database ', dbDatabase);
            console.error('ERROR =>',err);
            process.exit(-1);
        }
        conn.ping(err => {

            //fail ping to dbconfig
            if (err) {
                console.error('PING ERROR TO ',dbHost,' Database ', dbDatabase);
                console.error('ERROR =>',err);
                process.exit(-1);
            }

            //successfully ping to dbconfig poolsgpmoms
            conn.release();

            console.info("DB " + dbDatabase + " is alive at " + dbHost);
        });
    });
};

module.exports = {
    checkConnection: checkConnection
}

