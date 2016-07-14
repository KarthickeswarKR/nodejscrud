var users = require('../models/users.js');
module.exports = {
	getuser: function(req, res, next) {
		var query = users.find({});
		return query;
  },
  updateuser: function(req,res){
		users.update(req.body.name, req.body, function(err, users) {
			if(err){
				if(err.message === "Validation failed"){
					resHandler.validationError(err, res);
				}else {
					resHandler.serverError(err, res);
				}
			}else {
				resHandler.created(res, users);
			}
		});
	},
  deleteuser: function(req,res){
    users.remove({
      name: req.body.name
    }, function(err, users) {
      if (err) {
        return res.send("error");
      }
      res.json({ message: 'Successfully deleted' });
    });
}
};
