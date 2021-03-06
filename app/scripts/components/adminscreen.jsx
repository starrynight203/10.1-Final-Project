var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var HeadingComponent = require('./../components/heading.jsx');
var Backbone = require('backbone');

var AdminScreenComponent = React.createClass({
  render: function(){
    return (
      <div className="adminpage">
        <HeadingComponent/>
        <h3 className="welcome-title">Welcome!</h3>

        <div className="row ">
          <div className="col-xs-6 adminscreen">
            <a href="#createproduct"  className="products-button">Products</a>
          </div>
          <div className="col-xs-6">
            <a href="#orders" className="orders-button">Orders</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AdminScreenComponent;
