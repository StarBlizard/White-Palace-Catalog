/*
 * Main page
 */

var path = require('path');

module.exports.index = function(req, res){
	res.sendFile(path.join(__dirname, '../public', 'Index.html'));
};

