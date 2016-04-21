var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var HeadingComponent = require('./../components/heading.jsx');
var Cart = require('../models/models.js').Cart;
var model = require('../models/models');
var Parse = require('parse');
var Backbone = require('backbone');
var StripeCheckout = require('react-stripe-checkout');


var CartComponent = React.createClass({
  getInitialState: function(){
    return {
      'cartorder': [],
    };
  },
  componentWillMount: function(){
    var self = this;
    var query = new Parse.Query('Cart');

    query.include('product');

    query.find({
      success: function(results) {
        console.log(results);
        self.setState({
          'cartorder': results,
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },
  // callRemove:function(item, e){
  //   var self = this;
  //   // object is set to objectId of item clicked on
  //   var objectId = item.id;
  //
  //   // collection refers to the parse class
  //   //var collection = Parse.Object.extend("Cart");
  //
  //   // query is equal to the entire table in parse
  //   var query = new Parse.Query("Cart");
  //   // find the item (using model as a search parameter for)
  //   query.equalTo("objectId", objectId);
  //   query.find({
  //     success: function(object){
  //       self.removeItem(object);
  //       // Backbone.history.navigate('createproduct', {trigger: true});
  //     },
  //     error: function(error) {
  //       console.log("error: ",error);
  //     }
  //   })
  // },
  removeItem: function(item, e){
    var self = this;
    item.destroy({
      success: function(object) {
        console.log(object);
        console.log('model destroyed');

        var newCartOrder = _.reject(self.state.cartorder, function(item){
          return item.id == object.id;
        });
        console.log(newCartOrder);
        self.setState({'cartorder': newCartOrder})
        // The object was deleted from the Parse Cloud.
      },
      error: function(myObject, error) {
        console.log("error for deleted: ",error);
        // The delete failed.
        // error is a Parse.Error with an error code and message.
      }
    });
  },
  onToken: function(){
    var self = this;
    var query = new Parse.Query('Cart');
    query.find({
      success: function(results) {
        self.setState({'cartorder': []});
        _.each(results,function(result){
          result.destroy();
        })
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  },

  render: function(){
    var self = this;

    if (this.state.cartorder.length > 0){

      var products = this.state.cartorder.map(function(cartItem){


        var product = cartItem.get('product');
        var bindItem = self.removeItem.bind(self, cartItem);


        return(
            <tr key={cartItem.id}>
              <td>{product.get('name')}</td>
              <td>{cartItem.get('size')}</td>
              <td>{cartItem.get('qty')}</td>
              <td>{product.get('price')}</td>
              <td><button className="btn remove" onClick={bindItem}>Delete</button></td>
            </tr>
          );
      });
    }
    var runningTotal = 0;
      this.state.cartorder.forEach(function(cartItem){
          var product = cartItem.get("product")
          runningTotal += product.get('price');
      })


      return (
        <div className="cart-page">
          <HeadingComponent/>

          <div className="shopping-cart">
            <h3>Shopping Cart</h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Edit</td>
                </tr>
              </thead>
              <tbody>
                {products}
              </tbody>
            </table>
            <p>Total Cart Price: $ {runningTotal} </p>
          </div>
          <div className="stripe-checkout">
            <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_oHu1RKMOJtHkdGUpUWbPiN4e" />
        </div>
      </div>
    );
  }
});

module.exports = CartComponent;
