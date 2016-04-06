var Backbone = require('backbone');


var Jewelry = Backbone.Model.extend({
 idAttribute: 'cid'
});

var JewelryCollection = Backbone.Collection.extend({
  model: Jewelry,
  url: 'http://tiny-ring-server.herokuapp.com/',
  parse: function(data){
    return data;
  }
});

module.exports = {
  "Jewelry": Jewelry,
  "JewelryCollection": JewelryCollection
}
