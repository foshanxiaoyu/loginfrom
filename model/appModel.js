'User strict';
var sql = require('./msqldb.js');

//Task object constructor
var User = function(User){
    this.name = User.name;
    this.password = User.password;
    this.created_at = new Date();
};
User.createName = function (newUser, result) {    
        sql.query("INSERT INTO Users set ?", newUser, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
User.getNameById = function (Id, result) {
        sql.query("Select name from user where id = ? ", Id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getAllUser = function (result) {
        sql.query("Select * from Users", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('User : ', res);  

                 result(null, res);
                }
            });   
};
User.updateById = function(id, name, result){
  sql.query("UPDATE user SET name = ? WHERE id = ?", [user.name, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(id, result){
     sql.query("DELETE FROM Users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= {
    User,
}