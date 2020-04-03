'use strict';
const express = require('express');
const router = express.Router();
 module.exports = function(app) {
  var todoList = require('../controller/appController');

  // todoList Routes
  app.route('/user')
  .get(todoList.list_all_users)
  .post(todoList.create_a_name);
   
   app.route('/User/:Id')
   .get(todoList.read_a_name)
   .put(todoList.update_a_name)
   .delete(todoList.delete_a_name);
  };

// module.exports = router