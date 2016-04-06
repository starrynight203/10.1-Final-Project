var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("tiygvl");
Parse.serverURL = 'http://tiny-ring-server.herokuapp.com/';

var router = require('./routes/routes');
  $(function(){
    Backbone.history.start();
  });
