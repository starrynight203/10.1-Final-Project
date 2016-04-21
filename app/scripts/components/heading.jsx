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
        <div className="col-md-6">
          <ul className="heading-main-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#bio">Our Story</a></li>
            <li><a href="#gallery">Shop</a></li>
          </ul>
        </div>

          <div className="col-md-6 heading-cart-nav">
              <span><a href="#cart">Cart</a></span>
          </div>
      </div>
    );
  }
});


module.exports = HeadingComponent;
