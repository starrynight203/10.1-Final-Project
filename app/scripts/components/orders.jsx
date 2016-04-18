var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Parse = require('parse');
var HeadingComponent = require('./../components/heading.jsx');
var Backbone = require('backbone');


var OrdersComponent = React.createClass({
  render: function(){
    return(
      <div>
        <HeadingComponent/>
        <h3>Orders</h3>
        <a href="#createproduct" className="add-button">Product List</a>
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = OrdersComponent;
