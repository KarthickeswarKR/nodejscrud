var express     =   require("express");
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var users       =   require('./controllers/user-controller');
var html        =   require('./html')
var app         =   express();
var fs = require('fs')
var morgan = require('morgan')
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : true}));
app.use('/',router);
app.use('/api/users/', users);
app.use('/*', html);
app.listen(3000);
console.log("Listening to PORT 3000");
