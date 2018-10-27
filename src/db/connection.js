const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

connection.connect(function(err) {
    if(err) {
        console.error(err);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
