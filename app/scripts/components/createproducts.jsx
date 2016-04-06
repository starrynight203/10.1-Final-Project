var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var CreateProductsComponent = React.createClass({
  render: function(){
    return(
      <div className="createproductspage">
        <h3>Products</h3>
        <a href="#addproduct" className="add-button">Add</a>
        <div className="row product-forms">
          <div className="col-xs-4">
            <span>Name</span>
          </div>
          <div className="col-xs-4">
            <span>Price</span>
          </div>
          <div className="col-xs-4">
            <span>Actions</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateProductsComponent;
