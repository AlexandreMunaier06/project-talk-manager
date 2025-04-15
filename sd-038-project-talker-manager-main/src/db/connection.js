const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '2770',
    database: process.env.MYSQL_DATABASE || 'talkerbd',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;