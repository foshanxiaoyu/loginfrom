const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

const mysql = require('mysql');
const { User } = require('./model/appModel')
// connection configurations
// const mc = mysql.createConnection({
//     host: '134.175.31.209',
//     port:13307,
//     user: 'root',
//     password: 'asdfrewq',
//     database: 'test'
// });
 
// connect to database
// mc.connect();
// var routes = require('./routes/appRoutes');
// app.use(...routes);
var routes = require('./routes/appRoutes'); //importing route
    routes(app); //register the route


app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

