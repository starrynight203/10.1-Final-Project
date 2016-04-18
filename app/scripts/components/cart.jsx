var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var HeadingComponent = require('./../components/heading.jsx');
var Cart = require('../models/models.js').Cart;
var Parse = require('parse');
var Backbone = require('backbone');

var CartComponent = React.createClass({
  getInitialState: function(){
    return {
      'cartorder': [],
    };
  },
  componentDidMount: function(){
    var self = this;
    var query = new Parse.Query('Cart');

    query.include('product');

    query.find({
      success: function(results) {
        console.log(results);
        self.setState({
          'cartorder': results,
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },
  render: function(){
    if (this.state.cartorder.length > 0){
      var products = this.state.cartorder.map(function(Cart){
        var product = Cart.get('product');
        console.log('cart is:', Cart);
        return(
            <tr key={Cart.id}>
              <td>{product.get('name')}</td>
              <td>{Cart.get('size')}</td>
              <td>{Cart.get('qty')}</td>
              <td>{product.get('price')}</td>
            </tr>
          );
      });
    }

      return (
        <div className="cart-page">
          <HeadingComponent/>

          <div className="shopping-cart">
            <h3>Shopping Cart</h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Size</td>
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
