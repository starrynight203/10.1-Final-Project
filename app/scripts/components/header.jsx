var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ul className="main-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#bio">Our Story</a></li>
              <li><a href="#gallery">Shop</a></li>
            </ul>

            <h2 className="title">Name</h2>

            <ul className="cart-nav">
              <li><a href="#cart">Cart</a></li>
            </ul>
          </div>
        </div>

        <div className="s-button">
          <a href="#gallery" className="shop-button">Shop Now</a>
        </div>

      </div>
    );
  }
})

module.exports = HeaderComponent;
