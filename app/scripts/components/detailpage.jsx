var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var DetailPageComponent = React.createClass({
  render: function(){
    return(
      <div className="detailpage">
        <div className="row">
          <div className="col-xs-6">
            <img src="https://images.unsplash.com/photo-1437149639288-c32965270c85?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=e18726e763b47e3fcb2013e13aa0015c" className="detail-img" alt=""/>
          </div>
          <div className="col-xs-6">
            <h3 className="ring-name">Elle</h3>
            <span className="price">$25</span>
            <p className="ring-description">One crystal hairpin bead spans the top of the ring. Classic for  a reason, this ring will stand the test of time.</p>
            <span>Quantity:</span>
            <input type="text" className="form-control quantity-input" placeholder=""/>
            <span>Size:</span>
            <input type="text" className="form-control size-input" placeholder=""/>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailPageComponent;
