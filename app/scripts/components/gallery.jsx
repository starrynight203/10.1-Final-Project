var React = require('react');
var ReactDOM = require('react-dom');
var HeadingComponent = require('./../components/heading.jsx');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');
var CartItems = require('./../models/models.js').CartItems;

var GalleryComponent = React.createClass({
  getInitialState: function(){
    return {'products': []};
  },

  componentWillMount: function(){
    var self = this;
    var query = new Parse.Query('Product');

    query.find({
      success: function(products) {
        self.setState({'products': products});
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },

  render: function(){
    var self = this;
    var galleryRows = this.state.products.map(function(product){
      var imageUrl = product.get("images").length > 0 ? product.get("images")[0].url(): '';


        return (
          <div className="col-xs-12 col-md-4 col-sm-6" key={product.id}>
            <div className="pic1-row1">
              <a href={"#detail/" + product.id}><img src={imageUrl} alt="" className="gallery-image"  /></a>
            </div>
            <h5>{product.get('name')}</h5>
            <span id="gallery-price">${product.get('price')}</span>
          </div>
        );
      });
    return(
      <div className="gallerypage">
        <HeadingComponent/>

        <div className="row gallery-row">

          <div className="col-xs-12 picture-rows">
            {galleryRows}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GalleryComponent;
