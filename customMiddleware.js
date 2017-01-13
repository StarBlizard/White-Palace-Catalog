var that = this;

module.exports = function(req, res, next){
          var User = require('./model/user.js').user;
          if(req){
            var data = req.body;

            console.log(this.register);

            new User({
              name       : data.name,
              email      : data.email,
              password   : data.password,
              last_buy   : new Date(),
              home_num   : data.home_num,
              street     : data.street,
              suburb     : data.suburb,
              phone      : data.phone,
              age        : data.age,
              gender     : data.gender,
              premium    : false,
              img_path   : "./img/profile/usuario.jpeg"
            }).save().then(function(){
              next();
            })
           }
     }
       





