const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'react_assignment',
    user: 'root',
    password: ''
});

connection.connect(function(err) {
    if(err) {
        console.error('Error');
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
