'use strict';

let app        = require('./services/server').app;
let passport   = require('./services/passport').passport;

/*
 * Controllers
 * */

let indexController   = require("./controllers/index");
let sessionController = require("./controllers/session");
let productController = require('./controllers/product');

/*
 * Routes definition
 * */

// Index
app.get('/', indexController.index);
app.post('/', sessionController.check);
app.post('/logout',  sessionController.logout);
app.post('/register', sessionController.register);
app.get('/bck', indexController.bck);

// Authenticate
app.post('/login', passport.authenticate('local'),  sessionController.login);


  // Facebook Oauth
app.get('/auth/facebook', passport.authenticate('facebook', {
    scope:['email']
  }));

app.get('/auth/facebook/callback',passport.authenticate('facebook', {
    successRedirect: '/',
    scope:['email']
  }));

// Products

app.post('/product-update', productController.upload);
app.get('/download', productController.download);
app.get('/load-products/*', productController.load);
