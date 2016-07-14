var express = require('express');
var router = express.Router();
var users = require('../models/users.js');
var myMiddleware = function(req, res, next) {
res.send("Iam secured");
next();
};
router.use("/api/users/secured", myMiddleware, router.users);
