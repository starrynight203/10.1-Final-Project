var React = require('react');
var ReactDOM = require('react-dom');
var HeadingComponent = require('./../components/heading.jsx');
var $ = require('jquery');
var Parse = require('parse');
var Backbone = require('backbone');
var Product = require('./../models/models.js').Product;

var DetailPageComponent = React.createClass({
  getInitialState: function(){
    return {'product': new Product()};
  },
  componentWillMount: function(){
    var self = this;
    var query = new Parse.Query('Product');
  
    query.get(this.props.productId, {
      success: function(product) {
        self.setState({'product': product});
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },
  render: function(){

  var product = this.state.product;
  var imageUrl = product.get("images") ? product.get("images")[0].url(): '';
    return(
      <div className="detailpage">
        <HeadingComponent/>
        <div className="row">
          <div className="col-xs-6">
            <img src={imageUrl} className="detail-img" alt=""/>
          </div>
          <div className="col-xs-6">
            <div>
              <h3 className="ring-name" key={product.id}>{product.get('name')}</h3>
              <span className="price">${product.get('price')}</span>
              <p className="ring-description">{product.get('description')}</p>
              <span>Quantity:</span>
              <input type="text" className="form-control quantity-input" placeholder=""/>
              <span>Size:</span>
              <input type="text" className="form-control size-input" placeholder=""/>
              <a href="#" className="add-to-cart">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailPageComponent;
