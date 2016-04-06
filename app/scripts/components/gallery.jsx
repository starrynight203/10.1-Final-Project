var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var GalleryComponent = React.createClass({
  render: function(){
    return(
      <div className="gallerypage">
        <h3>This is my Gallery</h3>
      </div>
    );
  }
});

module.exports = GalleryComponent;
