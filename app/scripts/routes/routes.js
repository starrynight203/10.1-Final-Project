var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var HomePageComponent = require('./../components/homepage.jsx');
var SignupPage = require('./../components/admin-login.jsx');
var AdminScreenComponent = require('./../components/adminscreen.jsx');
var CreateProductsComponent = require('./../components/createproducts.jsx');
var AddProductComponent = require('./../components/addproductpage.jsx');
var GalleryComponent = require('./../components/gallery.jsx');
var DetailPageComponent = require('./../components/detailpage.jsx');
var BioPageComponent = require('./../components/biopage.jsx');
var CartComponent = require('./../components/cart.jsx');
var OrdersComponent = require('./../components/orders.jsx');
var ContactComponent = require('./../components/contact.jsx');
var ReturnExchangeComponent = require('./../components/returnsexchanges.jsx');

var appContainer = document.getElementById('app');
var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'adminlogin':'adminloginpage',
    'adminroute':'adminroutescreen',
    'createproduct':'createproductscreen', // list view
    'addproduct':'productAddEdit', //form view
    'product/:id/': 'productAddEdit', // product edit
    'gallery':'galleryscreen',
    'detail/:id':'detailscreen',
    'bio': 'bioscreen',
    'cart': 'cartscreen',
    'orders': 'orderscreen',
    'contact': 'contactscreen',
    'return': 'returnexchangescreen'
  },
  index: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(HomePageComponent),
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
  productAddEdit: function(){
    ReactDOM.unmountComponentAtNode(appContainer);
    ReactDOM.render(
      React.createElement(AddProductComponent),
      appContainer
    );
  },
  productAddEdit: function(id){
    var self = this;
    ReactDOM.unmountComponentAtNode(appContainer);
    ReactDOM.render(
      React.createElement(AddProductComponent, {router: self, productId: id}),
      appContainer
    );
  },
  galleryscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(GalleryComponent),
      appContainer
    );
  },
  detailscreen: function(id){
    var self = this;
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(DetailPageComponent, {router: self, productId: id}),
      appContainer
    );
  },
  bioscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(BioPageComponent),
      appContainer
    );
  },
  cartscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(CartComponent),
      appContainer
    );
  },
  orderscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(OrdersComponent),
      appContainer
    );
  },
  contactscreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(ContactComponent),
      appContainer
    );
  },
  returnexchangescreen: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(ReturnExchangeComponent),
      appContainer
    );
  }
});

var router = new Router();
module.exports = router;
