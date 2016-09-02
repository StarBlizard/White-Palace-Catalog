
module.exports.login = function(req, res){
  console.log('Welcome user', req.user);
  return res.send('Working on it');
};
