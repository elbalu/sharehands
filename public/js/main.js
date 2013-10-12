require.config({
  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-optamd3-min',
    json: (typeof JSON === "undefined") ? "lib/json2" : "empty:",
    dust: 'lib/dust-core-1.2.3',
//    dustHelper: 'lib/dust-helpers',
    bootstrap:'lib/bootstrap',
    less:'lib/less-1.3.0.min',
    select2: 'lib/select2',
    foursquare: 'lib/foursquareVenues'
  },

  shim: {
  
    
    "backbone": {
      deps: ["underscore", "jquery"]
    },
    "bootstrap":{
      deps:["jquery"]
    },
    "select2": {
      deps: ["jquery"]
    }
  }
});

require(['views/app', 'views/register'], function(AppView, RegisterView){
  var app_view = new AppView;
  app_view.render();
  var reg_view = new RegisterView;
  reg_view.render();
});

