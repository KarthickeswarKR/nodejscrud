var resHandler = require("res-handler");
var userDAO = require('../dao/userdao');
var users = require('../models/users.js');
exports.adduser = function(req, res) {
  var db = new users()
  db.name = req.body.name;
  db.password = req.body.password;
  db.save(function(err){
      if(err) {
      return res.send("error");
      } else {
      res.json(users);
      }
  });
};
exports.find=function(req,res){
  var result = userDAO.getuser(req,res);
result.exec(function(err,users){
    resHandler.success(res, users);
});
};
exports.updateuser=function(req,res){
  req.body.updatedOn = new Date();
      userDAO.updateuser(req,res);
};
  exports.deleteuser = function(req,res){
      userDAO.deleteuser(req,res);
  };
