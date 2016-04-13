var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var HeadingComponent = require('./../components/heading.jsx');
var Parse = require('parse');
var Backbone = require('backbone');


var CartComponent = React.createClass({
  render: function(){
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

            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = CartComponent;
