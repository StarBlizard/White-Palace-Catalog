'use strict';

let app      = require('./services/server').app;
let passport = require('./services/passport').passport;

/*
 * Controllers
 * */
let indexController   = require("./controllers/index");
let sessionController = require("./controllers/session");
let userController    = require("./controllers/user");
let productController = require('./controllers/product')

/*
 * Routes definition
 * */

// Index
app.get('/', indexController.index);
app.post('/', sessionController.check);
app.post('/logout', sessionController.logout)
app.post('/register', indexController.register);

// Authenticate
app.post('/login', passport.authenticate('local'),  sessionController.login);

// Product update
app.post('/product-update', productController.upload);
app.get('/download', productController.download);
