var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Parse = require('parse');
var Backbone = require('backbone');

var HeadingComponent = React.createClass({
  render: function(){
    return(
      <div className="row heading-page">
        <div className="col-xs-12">
          <ul className="cart-main-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#bio">Our Story</a></li>
            <li><a href="#gallery">Shop</a></li>
          </ul>

          <ul className="cart-nav">
            <li><a href="#cart">Cart</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = HeadingComponent;
