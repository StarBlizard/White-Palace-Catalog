var app = require('./services/server').app;

/*
 * Controllers
 * */
var indexController = require("./controllers/index")
var userController  = require("./controllers/user")
var adminController  = require("./controllers/admin")

/*
 * Routes definition
 * */

// Index
app.get('/', indexController.index);

// Users
app.get('/home', userController.home);

//Admin
app.get('/admin', adminController.show);
