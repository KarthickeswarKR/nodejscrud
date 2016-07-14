var express = require('express');
var router = express.Router();
var users = require('../models/users.js');
var userservice = require('../services/user-service.js');
router.post('/add',function(req, res) {
    userservice.adduser(req,res);
});
router.get('/disp',function(req, res) {
    userservice.find(req,res);
});
router.post('/delete',function(req, res) {
    userservice.deleteuser(req,res);
});
router.post('/update',function(req, res) {
    userservice.updateuser(req,res);
});


module.exports = router;
