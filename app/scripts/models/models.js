var Parse = require('parse');
var Backbone = require('backbone');


// var Jewelry = Backbone.Model.extend({
//  idAttribute: 'cid'
// });
//

var Product = Parse.Object.extend("Product");

var ProductCollection = Backbone.Collection.extend({
  model: Product,
  url: 'http://tiny-ring-server.herokuapp.com/',
  parse: function(data){
    return data;
  }
});

var Images = Parse.Object.extend("Image");

var ImageCollection = Backbone.Collection.extend({
  model: Images,
  url: 'http://tiny-ring-server.herokuapp.com/',
  parse: function(data){
    return data;
  }
});

module.exports = {
  "Product": Product,
  "ProductCollection": ProductCollection,
  "Images": Images,
  "ImageCollection": ImageCollection
}
