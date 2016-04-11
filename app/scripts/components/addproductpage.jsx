var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');
var model = require('../models/models');

var pointer;

var AddProductComponent = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {name: '', description: '', price: ''};
  },
  handleFile: function(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
      self.setState({
        data_uri: upload.target.result,
      });
    }

    reader.readAsDataURL(file);
  },

  handleSubmit: function(e){
    e.preventDefault();
    console.log('submit working');
    var product = new model.Product();

    product.set({
      'name': this.state.name,
      'description': this.state.description,
      'price': Number(this.state.price)
    });

    product.save(null, {
      success: function(product) {
        alert('New product created');
        pointer = product.id;
      },
      error: function(error) {
            console.log(error);
          }
    });

    var image = new model.Images();
    var imageFile = new Parse.File('file.jpg', {base64:this.state.data_uri});

    image.set({
      'title': "test",
      'file': imageFile,
      'productkey': pointer
    });

    image.save(null, {
      success: function(image) {
        alert('New image created');
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
        <button type="button" onClick={this.handleSubmit} type="submit" className="btn btn-default add-button"><a href="#">Submit</a></button>
      </div>
    </form>
    );
  }
})

module.exports = AddProductComponent;
