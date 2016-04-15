var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var HeadingComponent = require('./../components/heading.jsx');
var Backbone = require('backbone');
var Parse = require('parse');


var SignupPage = React.createClass({
  handleSignUp: function(e){
    e.preventDefault();
    console.log('handleSignUp');

      var user = new Parse.User();
      user.set({'username': $('#signup-email').val(),'password': $('#signup-password').val()});
      user.signUp(null, {
        'success': function(results){
          console.log('results: ', results);
          Backbone.history.navigate('adminlogin', {trigger: true});
        },
        'error': function(user, error){
          console.log(user, error);
        }
      });
  },
  handleLogIn: function(e){
    e.preventDefault();
    console.log('login working');
    Parse.User
      .logIn($('#login-email').val(), $('#login-password').val(), {
        success: function(user) {
          console.log(user);
          Backbone.history.navigate('adminroute', {trigger: true});
        },
        error: function(user, error) {
        }
      });
    console.log(Parse.User.current());
  },
  // handleLogOut: function(e){
  //   e.preventDefault();
  //   console.log('logout working');
  //   Backbone.history.navigate('index', {trigger: true});
  // }, //////// fix this to have log out button on multiple pages
  // <a href="#" onClick={this.handleLogOut} className="logout-button">Log Out</a>
  render: function(){
    return(
      <div className="background">
        <HeadingComponent/>
        <div className="row login-forms">
         <div className="col-md-6 signup">
           <form id="signup" onSubmit={this.handleSignUp} className="form-signup">
             <input id='signup-email' name='email' type='text' className='form-control' placeholder='email'/>
             <input id='signup-password' name='password' type='password' className='form-control' placeholder='password'/>
             <button type='submit' className='btn btn-default signup-button'>Sign Up</button>
           </form>
         </div>
         <div className="col-md-6 signin">
           <form id="signin" onSubmit={this.handleLogIn} className="form-signin">
             <input id='login-email' name='email' type='text' className='form-control' placeholder='email'/>
             <input id='login-password' name='password' type='password' className='form-control' placeholder='password'/>
             <button type='submit' className='btn btn-default Login-button'>Log In</button>
           </form>
         </div>
       </div>
     </div>
    );
  }
});

module.exports = SignupPage;
