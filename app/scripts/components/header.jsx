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
              <li>Home</li>
              <li>Our Story</li>
              <li>Shop</li>
            </ul>

            <h2 className="title">Name</h2>

            <ul className="login-nav">
              
              <li>Cart</li>
            </ul>
          </div>
        </div>

        <div className="s-button">
          <a href="#" className="shop-button">Shop Now</a>
        </div>

      </div>
    );
  }
})

module.exports = HeaderComponent;
