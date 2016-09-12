module.exports.login = function (req, res){
  console.log('Yaaaaaay!');
  return res.redirect(301, '/home');
}
