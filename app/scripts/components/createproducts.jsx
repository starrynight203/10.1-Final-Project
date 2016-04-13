var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var HeadingComponent = require('./../components/heading.jsx');
var Parse = require('parse');
var Backbone = require('backbone');

var CreateProductsComponent = React.createClass({
  getInitialState: function(){
    return {'products': []};
  },
  componentWillMount: function(){
    var self = this;
    var query = new Parse.Query('Product');

    query.find({
        success: function(products) {
          var imageQuery = new Parse.Query('Image').include('productkey');

          imageQuery.containedIn('productkey', products).find({
            success: function(images){

              var productsWithImages = products.map(function(product){

                _.each(images, function(image){
                  if(image.get('productkey').id == product.id){
                    product.set('image', image);
                  }
                });
                return product;
               });

              self.setState({'products': productsWithImages});
            },
            error: function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
          });
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      })
  },
  render: function(){
    var productRows = this.state.products.map(function(product){
    var imageUrl = '';
    if(product.get('image')){
      imageUrl = product.get('image').get('file').url();
    }

      return (
        <tr key={product.id}>
          <td>{product.get('name')}</td>
          <td><img src={imageUrl} /></td>
          <td>{product.get('price')}</td>
          <td>{product.get('description')}</td>
          <td><a href={"#addproduct"}>Edit</a></td>
        </tr>
      )
    });

    return(
      <div className="createproductspage">
        <HeadingComponent/>
        <h3>Products</h3>
        <a href="#addproduct" className="add-button">Add</a>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td className="add-images">Image</td>
                <td>Price</td>
                <td>Description</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {productRows}
            </tbody>
          </table>
      </div>
    );
  }
});

module.exports = CreateProductsComponent;
