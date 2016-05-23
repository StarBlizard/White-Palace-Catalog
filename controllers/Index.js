/*
* Main page
*/

var path = require('path');

module.exports.index = function(req, res){
   res.sendFile(path.join(__dirname, '../views', 'Index.html'));
};

/*
 * Landing page
 * */
module.exports.home = function(req, res){
  res.sendFile(path.join(__dirname, '../views', 'home.html'));
};
