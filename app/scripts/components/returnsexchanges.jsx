var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var ReturnExchangeComponent = React.createClass({
  render: function(){
    return (
      <div>
        <div className="return-page">
          <div className="row">
            <div className="col-md-6">
              <ul className="bio-main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#gallery">Shop</a></li>
              </ul>
            </div>

            <div className="col-md-6 cart-nav">
              <span><a href="#cart">Cart</a></span>
            </div>
          </div>

        </div>

      <div className="row return-paragraph">
        <div className="col-xs-12">
          <h3 className="ship-titles">Shipping and Handling</h3>
          <p>Shipping and handling is $3.50. This covers the cost of packaging and shipping with care.</p>
        </div>
        <div className="col-xs-12">
          <h3 className="ship-titles">Returns and Exchanges</h3>
          <p>Due to the custom design of each handmade ring, unforturnately there are no exchanges or refunds offered at this time.</p>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = ReturnExchangeComponent;
