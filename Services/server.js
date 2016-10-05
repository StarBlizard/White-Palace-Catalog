'use strict';

/*
 * Local Variables
 * */
const nconf        = require('nconf');
const Server       = require('http').Server;
const express      = require('express');
const bodyParser   = require('body-parser');
const path         = require('path');
const cookieParser = require('cookie-parser');
const passport     = require('./passport').passport;

module.exports = {

  start : function(){
    console.log('Start Server');
    var PORT = process.env.NODE_PORT || nconf.get('PORT');

    this.server  = new Server();
    this.app     = express(this.server);

    this.app.use(express.static(path.join(__dirname, '../public')))

    this.app.use(bodyParser.json());                         // for parsing application/json
    this.app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    this.app.use(passport.initialize());

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
