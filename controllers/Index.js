/*
* Main page
*/

module.exports.index = function(req, res){
   res.sendFile('Index.html');
};

/*
 * Landing page
 * */
module.exports.home = function(req, res){
  res.sendFile('/home/home.html');
};
