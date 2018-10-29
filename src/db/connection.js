const mysql = require('mysql');
var connection;

function handleDisconnect() {
    connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    });
    connection.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
            //console.error(err);
            //return;
        }
        connection.on('error', function(err) {
            console.log('db error', err);
            if(err.fatal || err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
              handleDisconnect();                         // lost due to either server restart, or a
            } else {                                      // connnection idle timeout (the wait_timeout
              throw err;                                  // server variable configures this)
            }
        });
        console.log('Connected as id ' + connection.threadId);
    });
}
handleDisconnect();

module.exports = connection;
