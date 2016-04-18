var Server        = require('http').Server;
var express       = require('express');
var bodyParser    = require('body-parser');
var configuration = require('../config/configuration');

module.exports = {

  start : function(){
    console.log('Start Server');
    var PORT = process.env.NODE_PORT || configuration.PORT;

    this.server  = new Server();
    this.app     = express(this.server);

    this.app.use(bodyParser.json());                         // for parsing application/json
    this.app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    // Use custom middleware
    this.app.use(function(req, res, next){
      console.log('Incomming request: ', req.url, req.connection.remoteAddress);
      return next();
    });

    this.app.listen(PORT, function(){
      console.log('Server started on PORT', PORT);
    });
  }

};
