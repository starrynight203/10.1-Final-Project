var React = require('react');
var ReactDOM = require('react-dom');
var HeadingComponent = require('./../components/heading.jsx');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var $ = require('jquery');
var Parse = require('parse');
var Cart = require('./../models/models.js').Cart;
var Product = require('./../models/models.js').Product;
var Backbone = require('backbone');


var DetailPageComponent = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {'product': new Product(), 'qty': 1, 'size': 0, 'currentImageUrl': ""};
  },
  componentWillMount: function(){
    var self = this;
    var query = new Parse.Query('Product');

    query.get(this.props.productId, {
      success: function(product) {
        if (product.get("images")){
          var currentImageUrl = product.get("images")[0].url();
        } else {
          var currentImageUrl = '';
        }
        self.setState({'product': product, 'currentImageUrl': currentImageUrl});
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },
  setImage: function(image, e){
    e.preventDefault();
    this.setState({'currentImageUrl': image.url()});
  },
  addToCart: function(product){
   console.log("addToCart");

   // 1. Create a new cart object
   var cart = new Cart();
   var self = this;
   cart.set({
     product: product,
     qty: self.state.qty,
     size: Number(self.state.size),
     wire: self.state.wire,
     bead: self.state.bead
   });
   // 3. Save the cart object
   cart.save(null, {
       success: function(results){
         console.log(results);
        //  Backbone.history.navigate('cart', {trigger: true});
       },
       error: function(model, err){
         console.log("error ", err);
       }
   });

   // 4. Update the cart icon to show number of items in the cart

 },
  render: function(){
  var self = this;
  var product = self.state.product;
  //var imageUrl = product.get("images") ? product.get("images")[0].url() : '';
  var imageUrl = this.state.currentImageUrl;
  if (product.get("images")){
    var images = product.get("images");
    var thumbnailImages = images.map(function(image){
      return(
        <img key={image.id} src={image.url()} onClick={self.setImage.bind(self, image)} className="thumbnail-images"/>
      )
    })
  } else {
    var thumbnailImages = "";
  }
    return(
      <div className="detailpage">
        <HeadingComponent/>
        <div className="row detail-row">
          <div className="col-xs-6">
            <img src={imageUrl} className="detail-img" alt=""/>
              <div className="row">
                <div className="col-xs-6 detail-thumbnail">
                  {thumbnailImages}
                </div>
              </div>

          </div>
          <div className="col-xs-6 ring-details">
              <h3 className="ring-name" key={product.id}>{product.get('name')}</h3>
              <span className="price">${product.get('price')}</span>
              <p className="ring-description">{product.get('description')}</p>
              <span>Quantity:</span>
              <input type="text" className="form-control quantity-input" valueLink={this.linkState('qty')} placeholder=""/>
              <span>Size:</span>
              <input type="text" className="form-control size-input" valueLink={this.linkState('size')} placeholder=""/>

              <button type='button' onClick={self.addToCart.bind(self, product)} className='btn btn-default add-to-cart'>Add to Cart</button>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = DetailPageComponent;
