var path = require('path');

/*
* Show a user
*/
module.exports.show = function(req, res){
  res.sendFile(path.join(__dirname, '../views', 'admin.html'));
};

module.exports.foo = function(req, res){
  console.log('Body: ', req.body);
  return res.status(200).json({message : 'Working on it'});
};
