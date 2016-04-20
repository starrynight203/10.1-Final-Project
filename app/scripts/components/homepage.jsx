var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var HomePageComponent = React.createClass({
  render: function(){
    return (
      <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ul className="main-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#bio">Our Story</a></li>
              <li><a href="#gallery">Shop</a></li>
            </ul>

            <h2 className="title">Classic</h2>

            <ul className="cart-nav">
              <li><a href="#cart">Cart</a></li>
            </ul>
          </div>
        </div>

        <div className="s-button">
          <a href="#gallery" className="shop-button">Shop Now</a>
        </div>
        <div className="row image-boxes">
          <div className="col-xs-6 picbox1">
            <img  src="images/homepage2.jpg" alt="ring1" />
          </div>
          <div className="col-xs-6 picbox2">
            <img src="images/homepage8.jpg" alt="ring2" />
          </div>
        </div>
      </div>
        <div className="row image-boxes2">
          <div className="col-xs-6 picbox3">
            <img src="images/homepage7.jpg" alt="ring3" />
          </div>
          <div className="col-xs-6 picbox4">
            <img src="images/homepage.jpg" alt="ring4" className="thered" />
          </div>
        </div>

        <div className="row short-story">
          <div className="col-xs-12">
            <h2>Classic</h2>
            <p>Classic is a handcrafted wire-wrapped ring line made to order and packaged with care. Established and based in New York City.</p>
            <a href="#bio" className="read-story">Read our Story</a>
          </div>
        </div>

        <div className="">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>


           <div className="carousel-inner" role="listbox">
             <div className="item active slide1">
              <img src="images/mayberslider2.jpg" alt="Chania" className="" />
            </div>

            <div className="item slide2">
              <img src="images/homepageslide4.jpg" alt="Chania" className="" />
            </div>

            <div className="item slide3">
              <img src="images/maybeslider1.jpg" alt="Flower" className="" />
            </div>

            <div className="item slide4">
              <img src="images/jackie1.jpg" alt="Flower" className="" />
            </div>
          </div>

           <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <h2 className="insta-name">Follow Us: <a href="#">Classicdesign</a></h2>
         <div className="instapics">
           <div className="row instagram-images">
             <div className="col-xs-4">
               <img src="images/hompage5.jpg" alt="" />
             </div>
             <div className="col-xs-4">
               <img src="images/homepageslide3.jpg" alt="" />
             </div>
             <div className="col-xs-4">
               <img src="images/homepageslide.jpg" alt="" />
             </div>
           </div>

           <div className="row instagram-images2">
             <div className="col-xs-4">
               <img src="images/idk.jpg" alt="" />
             </div>
             <div className="col-xs-4">
               <img src="images/contactheader.jpg" alt="" />
             </div>
             <div className="col-xs-4">
               <img src="images/emily4.jpg" alt="" />
             </div>
           </div>
         </div>


      </div>
    );
  }
})

module.exports = HomePageComponent;
