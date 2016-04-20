var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var ContactComponent = React.createClass({
  render: function(){
    return (
      <div>
      <div className="contact-page">
        <div className="row">
          <div className="col-xs-12">
            <ul className="bio-main-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#gallery">Shop</a></li>
            </ul>

            <ul className="cart-nav">
              <li><a href="#cart">Cart</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-4 col-md-offset-2 contact">
          <h3>Get In Touch</h3>
          <ul>
            <li><i className="fa fa-phone" aria-hidden="true"></i> +555-555-5555</li>
            <li><i className="fa fa-envelope-o" aria-hidden="true"></i> theclassic@example.com</li>
          </ul>
          <address><i className="fa fa-map-marker" aria-hidden="true"></i>
          123 Example Ave<br/>
          Example, NY 55555<br/>
          USA
          </address>
        </div>
        <div className="col-xs-12 col-md-6 contact-image">
          <img src="images/contactpic.jpg" alt=""/>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = ContactComponent;
