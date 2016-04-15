var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var BioPageComponent = React.createClass({
  render: function(){
    return (
      <div>
      <div className="bio-page">
        <div className="row">
          <div className="col-xs-12">
            <ul className="bio-main-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Shop</a></li>
            </ul>

            <ul className="cart-nav">
              <li><a href="#cart">Cart</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-area">
        <div className="row">
          <div className="col-xs-12 about">
            <h1>About</h1>
              <p>The Middle Finger is a handcrafted wire-wrapped ring line made to order and packaged with care. Established and based in New York City. The line carries styles ranging from sassy to sweet inspired by the unique friends of the designer. Emily Dixon is an actor living in NYC. She is moved daily by the art and artists that inhabit her city. This artistic culture along with her knack for new creative endeavors led her to create this ring line inspired by her friends and designed for everyone.</p>
          </div>
        </div>

        <div className="row emily-area">
          <div className="col-xs-6">
            <img src="images/emily.jpg" alt="emily"/>
          </div>
          <div className="col-xs-6">
            <h2>Owner, Designer</h2>
            <p>Emily Dixon is an Actor living in New York City. Whether it’s been painting rocks as a child or DIY-ing furniture she finds on the street, Emily loves to create. Born and raised in South Carolina, Emily loved to get her hands dirty and turn an old tree house into fully functioning Castle for her friends to dress up and play in. Her passion for turning nothing into something along with the urge to always play dress up, inspired Emily to craft The Middle Finger.</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = BioPageComponent;
