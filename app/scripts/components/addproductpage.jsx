var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');
var model = require('../models/models');

var AddProductComponent = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {name: '', description: '', price: '', images: []};
  },
  componentWillMount: function(){
    var self = this;
    if(!self.props.productId){
      return;
    }
    var query = new Parse.Query('Product');
    query.get(self.props.productId, {
      success: function(product){
        self.setState({
          name: product.get('name'),
          price: product.get('price'),
          description: product.get('description')
        });
      }
    });
  },

  handleFile: function(e) {
    var file = e.target.files[0];
    var images = this.state.images;
    images.push(new Parse.File(file.name, file));
    this.setState({'images': images});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var router = this.props.router;
    var parseImages = this.state.images.map(function(image){
      image.save();
      return image;
    });

    var product = new model.Product();
    product.set({
      'name': self.state.name,
      'description': self.state.description,
      'price': Number(self.state.price),
      'images': parseImages
    });

    product.save(null, {
      success: function(product) {
        alert('New product created');
      },
      error: function(error) {
            console.log(error);
          }
    });
    // Backbone.history.navigate('gallery', {trigger: true});
  },

  render: function(){
    return(
      <form encType="multipart/form-data">
      <div className="addproductpage">
        <h3>Add Product</h3>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Name</label>
              <input type="text" className="form-control" valueLink={this.linkState('name')} id="item-name" placeholder=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Price</label>
              <input type="text" className="form-control" valueLink={this.linkState('price')} id="item-price" placeholder=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Description</label>
              <textarea className="form-control" valueLink={this.linkState('description')} rows="3"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Image</label>
              <input type="file" onChange={this.handleFile} className="btn btn-default add-button"/>
            </div>
          </div>
        </div>
        <button type="button" onClick={this.handleSubmit} type="submit" className="btn btn-default add-button"><a href="#createproduct">Submit</a></button>
      </div>
    </form>
    );
  }
})

module.exports = AddProductComponent;
