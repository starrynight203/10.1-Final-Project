var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./../models/models');
var jewelryCollection = new models.JewelryCollection();

var HeaderComponent = require('./../components/header.jsx');
var SignupPage = require('./../components/admin-login.jsx');
var AdminScreenComponent = require('./../components/adminscreen.jsx');
var CreateProductsComponent = require('./../components/createproducts.jsx');
var AddProductComponent = require('./../components/addproductpage.jsx');
var GalleryComponent = require('./../components/gallery.jsx');

var appContainer = document.getElementById('app');
var Router = Backbone.Router.extend({
  routes:{
    'index':'index',
    'adminlogin':'adminloginpage',
    'adminroute':'adminroutescreen',
    'createproduct':'createproductscreen',
    'addproduct':'addproductscreen',
    'gallery':'galleryscreen'
  },
  index: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(HeaderComponent),
      appContainer
    );
  },
  adminloginpage: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(SignupPage),
      appContainer
    );
  },
  adminroutescreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(AdminScreenComponent),
      appContainer
    );
  },
  createproductscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(CreateProductsComponent),
      appContainer
    );
  },
  addproductscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);
    ReactDOM.render(
      React.createElement(AddProductComponent),
      appContainer
    );
  },
  galleryscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(GalleryComponent),
      appContainer
    );
  }
});

var router = new Router();
module.exports = router;
jewelryCollection.fetch();
console.log(jewelryCollection);
