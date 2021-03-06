var React = require('react');
var _ = require('underscore');
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
          'product': product,
          name: product.get('name'),
          price: product.get('price'),
          description: product.get('description'),
          images: product.get('images')
        });
      }
    });
  },

  handleFile: function(e) {
    var self = this;
    var file = e.target.files[0];

    var images = this.state.images;
    var newImage = new Parse.File(file.name, file);
    newImage.save().then(function(file){
      images.push(file);
      if (self.state.product){
        self.state.product.set("images", images);
        self.state.product.save();
      }
      self.setState({'images': images});
    });

  },

  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var router = this.props.router;
    var product = new model.Product({id: self.props.productId});
    product.set({
      'name': self.state.name,
      'description': self.state.description,
      'images': self.state.images,
      'price': Number(self.state.price)
    });

    product.save(null, {
      success: function(product) {
        Backbone.history.navigate('createproduct', {trigger: true});
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  deleteImage: function(image, e){
    var self = this;
    e.preventDefault();
    var newImages = _.without(this.state.images, _.findWhere(this.state.images, {_name: image.name()}));
    console.log(newImages);
    var query = new Parse.Query('Product');
    query.get(this.props.productId, {
      success: function(product){
        product.set('images', newImages);
        product.save().then(function(){
          self.setState({"images": newImages});
        });
      }
    });
  },
  buildUploadInputs: function(){
    var self = this;
    var images = self.state.product ? self.state.product.get("images") : self.state.images || [];

    var pictureInputs = images.map(function(image, index) {
      var fileInput = (
        <span>
          <img src={image.url()} className="thumbnail-images" />
          <div className="image-name">{image.name()}</div>
          <div className="delete-image" onClick={self.deleteImage.bind(self, image)}>X</div>
        </span>
      )

      return (
        <div className="row" key={index}>
          <div className="col-xs-12">
            <div className="form-group">
                {fileInput}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
      <div className="row">
        <div className="col-xs-12">
          <div className="form-group">
            <input type="file" onChange={this.handleFile} className="btn btn-default add-button"/>
          </div>
        </div>
      </div>
      {pictureInputs}
      </div>
    );
  },
  handleRemove:function(){
    // object is set to objectId of item clicked on
    var object = this.props.productId;
    // collection refers to the parse class
    var collection = Parse.Object.extend("Product");
    // query is equal to the entire table in parse
    var query = new Parse.Query(collection);
    // find the item (using model as a search parameter for)
    query.get(object, {
      success: function(object){
        object.destroy({});
        console.log('model destroyed');
        Backbone.history.navigate('createproduct', {trigger: true});
      },
      error: function(error) {
        console.log(error);
      }
    })
  },
  render: function(){
    var self = this;
    var pictureInputs = self.buildUploadInputs();
    console.log("RENDER FIRED!")
    return(
      <form encType="multipart/form-data">
      <div className="addproductpage">
        <h3>Add/Edit Product</h3>
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

        {pictureInputs}
        <button onClick={this.handleRemove} className="btn btn-primary remove-product">Delete Product</button>
        <button type="button" onClick={this.handleSubmit} type="submit" className="btn btn-default add-button">Submit</button>
      </div>
    </form>
    );
  }
})

module.exports = AddProductComponent;
