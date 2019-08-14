import React from 'react';
import './App.css';

class App extends React.Component {
   constructor(props) {
      super(props);

	  var google = "https://play.google.com/store/apps/developer?id=Rahamathullah+S";
	  var persCommunity = "https://rahamaths.appspot.com/";

      this.state = {
         googleURL: google,
         persCommunityURL: persCommunity
      }
   }
   render() {
	  var topicStyle = {
		color: 'red'
	  }
      return (
         <div>
		    <h1 style={topicStyle}>Props</h1>
		    <h1>Title : {this.props.title}</h1>
            <h3>ID : {this.props.id ? "Registered Userd Id = " : "Registered Userd Id = Empty"} {this.props.id}</h3>
            <h3>Name : {this.props.name}</h3>
            <h3>Email : <a href={this.props.emailURL}>{this.props.email}</a></h3>
		    
	        <h1 style={topicStyle}>Default Props</h1>
		    <h3>LinkedIn : <a href={this.props.linkedinURL}>{this.props.linkedinURL}</a></h3>
		    <h3>Twitter : <a href={this.props.twitterURL}>{this.props.twitterURL}</a></h3>
		    <h3>gitHub : <a href={this.props.githubURL}>{this.props.githubURL}</a></h3>
		    
			<h1 style={topicStyle}>Default Props as function</h1>
		    <h3>Location : {this.props.myLocation(false)}</h3>

			<h1 style={topicStyle}>State</h1>
		    <h3>Google Play Console : <a href={this.state.googleURL}>{this.state.googleURL}</a></h3>
		    <h3>My Community Website : <a href={this.state.persCommunityURL}>{this.state.persCommunityURL}</a></h3>

         </div>
      );		
   }
}

var linkedin = "https://in.linkedin.com/in/rahamathullah-s-18a12816";
var twitter = "https://twitter.com/Rahamat87523498";
var github = "https://github.com/rahamath18";

App.defaultProps = {
   linkedinURL: linkedin,
   twitterURL: twitter,
   githubURL: github,
   myLocation: function(online_or_offline) {return online_or_offline ? "ONLINE" : "OFF-LINE"}
}

export default App;
