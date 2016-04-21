var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Parse = require('parse');
var HeadingComponent = require('./../components/heading.jsx');
var Backbone = require('backbone');


var PaymentConfirmationComponent = React.createClass({
  render: function (){
    return (
      <div className="row">
        <HeadingComponent/>
          <div className="col-md-6 col-md-offset-3 confirm-page">
            <h4>Thank you for your order!</h4>
            <ul>
              <li>Your order is now being processed and assembled with care!</li>
              <li> To continue shopping click <a href="#">here!</a></li>
            </ul>
          </div>
      </div>
    );
  }
});

module.exports = PaymentConfirmationComponent;
