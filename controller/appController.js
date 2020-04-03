'use strict';

var User = require('../model/appModel.js');

exports.list_all_user = function(req, res) {
  User.getAllUser(function(err, name) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(name);
  });
};



exports.create_a_name = function(req, res) {
  var new_name = new User(req.body);

  //handles null error 
   if(!new_user.name || !new_user.password){

            res.status(400).send({ error:true, message: 'Please provide name/password' });

        }
else{
  
  User.createName(new_name, function(err, name) {
    
    if (err)
      res.send(err);
    res.json(name);
  });
}
};


exports.read_a_name = function(req, res) {
  User.getNameById(req.params.Id, function(err, task) {
    if (err)
      res.send(err);
    res.json(name);
  });
};


exports.update_a_name = function(req, res) {
  User.updateById(req.params.taskId, new User(req.body), function(err, name) {
    if (err)
      res.send(err);
    res.json(name);
  });
};


exports.delete_a_name = function(req, res) {


  User.remove( req.params.Id, function(err, name) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};