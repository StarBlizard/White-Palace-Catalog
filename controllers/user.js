/*
* Show a user
*/
module.exports.show = function(req, res){
  res.status(200).send('Working on it');
  res.sendFile('respuesta')
};

module.exports.foo = function(req, res){
  console.log('Body: ', req.body);
  return res.status(200).json({message : 'Working on it'});
};
