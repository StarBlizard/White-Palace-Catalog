'use strict';

let app      = require('./services/server').app;
let passport = require('./services/passport').passport;

/*
 * Controllers
 * */
let indexController   = require("./controllers/index")
let sessionController = require("./controllers/session")
let userController    = require("./controllers/user")
let adminController   = require("./controllers/admin")

/*
 * Routes definition
 * */

// Index
app.get('/', indexController.index);
app.post('/register', indexController.register)

app.post('/login', passport.authenticate('local'),  sessionController.login);

// Users
app.get('/home', userController.home);

//Admin
app.get('/admin', adminController.show);
