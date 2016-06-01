var app = require('./services/server').app;

/*
 * Controllers
 * */
var indexController = require("./controllers/index")
var userController  = require("./controllers/user")

/*
 * Routes definition
 * */

// Home
app.get('/', indexController.index);
app.get('/home', indexController.home);

// Users
app.get('/admin',  userController.show);
