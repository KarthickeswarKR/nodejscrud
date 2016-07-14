var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
Schema = mongoose.Schema;

var users = new Schema(
{
name: String,
password: String
});
module.exports = mongoose.model('users', users);
