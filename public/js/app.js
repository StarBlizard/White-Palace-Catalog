let App = {
  Models      : {},
  Collections : {},
  Views       : {},

  Events      : {},

  Initialize : function(){
    App.router = new App.Router();
  }
};

$(App.Initialize);
