var LocalStrategy = require('passport-local').Strategy;

/*
 * Dummy user
 * */
var user = {
  id     : 1,
  username : 'foo',
  password : 'bar',
  email : 'foo@bar.com'
};

module.exports = function() {
  return new LocalStrategy(
    function(username, password, done) {

    //User.forge({username : username}).fetch().then(function(user){
      // Login
    //});

    if(username === user.username && password === user.password){
      return done(null, user); // Correct user.toJSON();
    }

    return done(null, false, {message : 'Invalid Credentials'});


    //User.findOne({ username: username }, function (err, user) {
      //if (err) { return done(err); }
      //if (!user) {
        //return done(null, false, { message: 'Incorrect username.' });
      //}
      //if (!user.validPassword(password)) {
        //return done(null, false, { message: 'Incorrect password.' });
      //}
      //return done(null, user);
    //});
  });
};
