var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var HeadingComponent = require('./../components/heading.jsx');
var CartCollection = require('../models/models.js').CartCollection;
var Parse = require('parse');
var Backbone = require('backbone');

var CartComponent = React.createClass({
  getInitialState: function(){
    return {'products': []};
  },
  componentDidMount: function(){
    var self = this;
    var cart = new models.CartCollection();
    console.log(cart);
    cart.fetch().done(function(products){
      console.log(products);
      self.setState({ 'products': products});
    });
  },
  render: function(){
    var products = this.state.products.map(function(indivCart){
      console.log(indivCart);
      var imgUrl= indivCart.get("images").length > 0 ? indivCart.get("images")[0].url() : '';
      return(
          <tr key={indivCart.id}>
            <td>{indivCart.get('name')}</td>
              <td>${indivCart.get('price')}</td>
            <td className="add-image"><img src={imgUrl} /></td>
          </tr>
        )
    });
      return (
        <div className="cart-page">
          <HeadingComponent/>

          <div className="shopping-cart">
            <h3>Shopping Cart</h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Edit</td>
                </tr>
              </thead>
              <tbody>
                {products}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
});

module.exports = CartComponent;
