var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var AddProductComponent = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    console.log('submit working');
    Backbone.history.navigate('gallery', {trigger: true});
  },
  render: function(){
    return(
      <div className="addproductpage">
        <h3>Add Product</h3>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Name</label>
              <input type="text" className="form-control" id="item-name" placeholder=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Description</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="exampleInputName2">Image</label>
              <button type="button" className="btn btn-default add-button">Add Image</button>
            </div>
          </div>
        </div>
        <button type="button" onSubmit={this.handleSubmit} type="submit" className="btn btn-default add-button">Submit</button>
      </div>
    );
  }
})

module.exports = AddProductComponent;
