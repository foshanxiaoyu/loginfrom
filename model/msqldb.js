'user strict';

var mysql = require('mysql');

//local mysql 134.175.31.209 wawan server db connection

var connection = mysql.createConnection({
    host : '134.175.31.209',
    port : 13307,
    user : 'root',
    password : 'asdfrewq',
    database : 'test'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;