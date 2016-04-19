var app = require('./services/server').app;

/*
 * Controllers
 * */
var indexController = require("./controllers/home")
var userController = require("./controllers/user")

/*
 * Routes definition
 * */

// Home
app.get('/', homeController.index);
app.get('/home', homeController.home);

// Users
app.get('/enter_products',  userController.show);

// Example
app.post('/foo', userController.foo);
