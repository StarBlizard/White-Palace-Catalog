'use strict';

let app        = require('./services/server').app;
let passport   = require('./services/passport').passport;
let customMidd = require('./customMiddleware');

/*
 * Controllers
 * */
let indexController   = require("./controllers/index");
let sessionController = require("./controllers/session");
let userController    = require("./controllers/user");
let productController = require('./controllers/product');

console.log(customMidd);

/*
 * Routes definition
 * */
// Index
app.get('/', indexController.index);
app.post('/', sessionController.check);
app.post('/logout',  sessionController.logout);
app.post('/register', customMidd, passport.authenticate('local'), sessionController.registerComplete);

// Authenticate
app.post('/login', passport.authenticate('local'),  sessionController.login);

// Product update
app.post('/product-update', productController.upload);
app.get('/download', productController.download);
