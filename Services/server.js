'use strict';

/*
 * Local Variables
 * */
const nconf        = require('nconf');
const Server       = require('http').Server;
const cookieParser = require('cookie-parser')
const express      = require('express');
const session      = require('express-session');
const bodyParser   = require('body-parser');
const path         = require('path');
const passport     = require('./passport').passport;
const busboy       = require('connect-busboy');

module.exports = {

  start : function(){
    console.log('Start Server');
    var PORT = process.env.NODE_PORT || nconf.get('PORT');

    this.server  = new Server();
    this.app     = express(this.server);

    this.app.use(express.static(path.join(__dirname, '../public')))

    this.app.use(cookieParser());

    this.app.use(busboy());

    this.app.use(bodyParser.json(nconf.get('parse').json.params));             // for parsing application/json
    this.app.use(bodyParser.urlencoded(nconf.get('parse').urlencoded.params)); // for parsing application/x-www-form-urlencoded

    this.app.use(session({ secret: 'nyanya'} ));

    this.app.use(passport.initialize());
    this.app.use(passport.session());

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
