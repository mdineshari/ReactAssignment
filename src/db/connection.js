const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'new_schema',
    user: 'root',
    password: 'Flux_21D'
});

connection.connect(function(err) {
    if(err) {
        console.error('Error');
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
