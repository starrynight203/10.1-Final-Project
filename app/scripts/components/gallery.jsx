var React = require('react');
var ReactDOM = require('react-dom');
var HeadingComponent = require('./../components/heading.jsx');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');

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

  details: function(product, e){
    e.preventDefault();
    var product = JSON.stringify(product);
    localStorage.setItem('product', product);
    console.log(localStorage.getItem('product'));
    Backbone.history.navigate('detail', {trigger: true});
  },

  render: function(){
    var self = this;
    var galleryRows = this.state.products.map(function(product){
      var imageUrl = product.get("images").length > 0 ? product.get("images")[0].url(): '';


        return (
          <div className="col-xs-3" key={product.id} onClick={self.details.bind(self, product)}>
            <div className="pic1-row1">
              <img src={imageUrl} alt=""  />
            </div>
            <h5>{product.get('name')}</h5>
            <span>${product.get('price')}</span>
          </div>
        );
      });
    return(
      <div className="gallerypage">
        <HeadingComponent/>

        <div className="row">
          <div className="col-xs-3 side-nav">
            <ul className="list-names">
              <li className="elle"><a href="#">Elle</a></li>
              <li><a href="#">Emily</a></li>
              <li><a href="#">Faye</a></li>
              <li><a href="#">Noelle</a></li>
              <li><a href="#">Custom</a></li>
            </ul>
          </div>
          <div className="col-xs-9">
            {galleryRows}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GalleryComponent;
