var app = require('./services/server').app;

/*
 * Controllers
 * */
var homeController = require("./controllers/home")
var userController = require("./controllers/user")

/*
 * Routes definition
 * */

// Home
app.get('/',        homeController.index);
app.get('/home', homeController.home);

// Users
app.get('/enter_products',  userController.enter_products);

// Example
app.post('/foo', userController.foo);
