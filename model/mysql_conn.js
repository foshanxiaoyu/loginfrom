
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '134.175.31.209:13307',
  user     : 'root',
  password : 'asdfrewq',
  database : 'wu'
});

connection.connect();

connection.query('SELECT * from ftall limit 10', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();