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
          'product': product,
          name: product.get('name'),
          price: product.get('price'),
          description: product.get('description'),
          images: product.get('images')
        });
      }
    });
  },

  handleFile: function(i, e) {
    var file = e.target.files[0];
    var images = this.state.images;

    if(!i){
      images.push(new Parse.File(file.name, file));
    }else{
      images[i] = new Parse.File(file.name, file);
    }

    this.setState({'images': images});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var router = this.props.router;
    console.log(this.state.images);
    var parseImages = this.state.images.map(function(image){
      console.log(image);
      image.save();
      console.log('saved');
      return image;
    });

    var imagesComplete = Promise.all(parseImages);
    imagesComplete.then(function(){
      var product = new model.Product({id: self.props.productId});
      product.set({
        'name': self.state.name,
        'description': self.state.description,
        'price': Number(self.state.price),
        'images': parseImages
      });

      product.save(null, {
        success: function(product) {
          alert('New product created');
          Backbone.history.navigate('createproduct', {trigger: true});
        },
        error: function(error) {
              console.log(error);
            }
      });
    });
    // Backbone.history.navigate('gallery', {trigger: true});
  },
  buildUploadInputs: function(){
    var self = this;
    var images = self.state.product ? self.state.product.get("images") : [];

    var pictureInputs = (Array.apply(null, new Array(10))).map(function(val, i){
      var fileInput;
      var num = i+1;

      console.log('length', images.length);
      console.log('num', num);

      // if the image is on parse, display edit input
      if (images.length > num){
        fileInput = (
          <span>
          <img src={images[i].url()} className="thumbnail-images"/>
          <input type="file" onChange={self.handleFile.bind(self, num)} className="btn btn-default add-button "/>
          </span>
        );

      // no image on parse, display add input
      } else {
        fileInput = (<input type="file" onChange={self.handleFile.bind(self, false)} className="btn btn-default add-button"/>);
      }

      return(
        <div className="row" key={i}>
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Image #{i + 1}</label>

              {fileInput}

            </div>
          </div>
        </div>
      );
    });

    return pictureInputs;
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
      },
      error: function(error) {
        console.log(error);
      }
    })
  },
  render: function(){
    var self = this;
    var pictureInputs = self.buildUploadInputs();

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

        {pictureInputs}
        <button onClick={this.handleRemove} className="btn btn-primary remove">Delete</button>
        <button type="button" onClick={this.handleSubmit} type="submit" className="btn btn-default add-button">Submit</button>
      </div>
    </form>
    );
  }
})

module.exports = AddProductComponent;
