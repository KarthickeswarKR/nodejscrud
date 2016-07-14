var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var express = require('express');

     var app = express();

     var mongoose = require('mongoose');

     var url = 'mongodb://localhost:27017/logindb';
     var loginSchema = mongoose.Schema({
        username: String,
        password: String
     });

     mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.post('/login',function(req,res){


  var users = mongoose.model('user', userSchema);
var user1 = new users({
    username: req.body.username,
    password: req.body.password
});
user1.save(function(err) {
    if (err) throw err;
    console.log("Login saved succesfully");
    res.end('success');
    });
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
