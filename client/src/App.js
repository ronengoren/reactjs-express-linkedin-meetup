import React, { Component } from 'react';
import './App.css';
import ProfileCard from "./components/ProfileCard";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

var IN = null;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isAuthorized: false,
      firstName: null,
      lastName: null,
      headline: null,
      profileURL: null,
      pictureURL: null,
      location: null,
      industry: null,
      positions: null,
      summary: null,
      connectionsCount: null,
      items: [],
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.loadLinkedinJS();
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

  }
  
  isLinkedinAuthorized = () => {
    return IN.User.isAuthorized();
  };
  linkedinAuthorize = () => {
    IN.User.authorize(this.onLinedInLoad());
  };
  updateAuthorizeStatus = () => {
    if (IN === null) {
      IN = window.IN;
    }
    if (this.isLinkedinAuthorized()) {
      this.setState({
        isAuthorized: true
      });
      this.requestLinkedinProfile();
    }
  };
  onLinedInLoad = () => {
    IN.Event.on(IN, "auth", this.updateAuthorizeStatus);
  };
  linkedinLogout = () => {
    IN.User.logout(this.updateAuthorizeStatus);
  };
  // componentDidMount = () => {
    // const ul = document.getElementById('users'); 
    // const url = 'https://api.meetup.com/find/groups?key=326d1a3e7c615d6f6f2752807a5f7b38&sign=true&photo-host=public&text=Computer+Software&page=20';
    // this.loadLinkedinJS();
//     fetch(url)
//     .then(res => res.json())
//     .then((result)=> {
//       // console.log(result)
//       this.setState({
//         isLoaded: true,
//         items: result.items
//       });
//       console.log("dfdf")
//       console.log(result)
   
//   },
//   (error) => {
//     this.setState({
//       isLoaded: true,
//       error
//     });
//   }
// )

  // }
 

  loadLinkedinJS = () => {
    window.updateAuthorizeStatus = this.updateAuthorizeStatus;
    var script = window.document.createElement("script");
    script.src = "//platform.linkedin.com/in.js";
    script.innerHTML = `api_key:   78e29oa92rrgkt
    authorize: true
    onLoad:updateAuthorizeStatus`;
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  requestLinkedinProfile = () => {
    IN.API.Raw(
      "/people/~:(first-name,last-name,public-profile-url,location,headline,picture-url,positions,summary,num-connections,industry)?format=json"
    )
      .method("GET")
      .body()
      .result(this.updateLinkedinProfile);
  };

  updateLinkedinProfile = profile => {
    this.setState({
      firstName: profile.firstName,
      headline: profile.headline,
      lastName: profile.lastName,
      profileURL: profile.publicProfileUrl,
      pictureURL: profile.pictureUrl,
      location: profile.location.name,
      positions: profile.positions,
      industry: profile.industry,
      summary: profile.summary,
      connectionsCount: profile.numConnections
    });
  };

  shareToLinkedin = () => {
    // Build the JSON payload containing the content to be shared
    var payload = {
      comment: `Check out ${window.location.href} !`,
      visibility: {
        code: "anyone"
      }
    };

    IN.API.Raw("/people/~/shares?format=json")
      .method("POST")
      .body(JSON.stringify(payload))
      .result(this.onShareSuccess)
      .error(this.onShareError);
  };

  onShareSuccess = data => {
    console.log(data);
    Alert.success(
      `<div style="text-align:left"><p>You shared on Linkedin Successfully!<p><br/><a href=${
        data.updateUrl
      } target="_blank">Open</a></div>`,
      {
        html: true
      }
    );
  };

  onShareError = error => {
    console.log(error);
    Alert.error("Something wrong, please try again.");
  };

  requestOAuthToken = () => {

console.log(process.env.REACT_APP_LINKEDIN_REDIRECT_URI)
console.log("sdkjskjd")
console.log(process.env.REACT_APP_LINKEDIN_CLIENT_ID)
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78e29oa92rrgkt&scope=r_basicprofile&state=123456&redirect_uri=${process.env.REACT_APP_LINKEDIN_REDIRECT_URI}`
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.addEventListener(
      "message",
      (event) => {
        if (event.data.type === "access_token") {
          Alert.success(`Access token obtained: ${event.data.access_token}`,{position:'top'});
        }
      },
      false
    );

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };


  render() {
    return (
      <div className="App">
      
       <header className="App-header">
       
       <h1 className="App-title">React Linkedin Login</h1>
       <p className="App-intro">A demo page for Linkedin login</p>
        <h1>Users</h1>
        </header>
        <div className="App-body">
           {this.state.isAuthorized ? (
             
            <span>
               <button onClick={this.linkedinLogout}>Linkedin Logout</button>
               <button onClick={this.shareToLinkedin}>Share on Linkedin</button>
             </span>
          ) : (
            
            <button onClick={this.linkedinAuthorize}>Linkedin Login</button>
          )}
      
          </div>
     
         {this.state.isAuthorized &&
            this.state.summary && (
              <ProfileCard
                firstName={this.state.firstName}
                headline={this.state.headline}
                lastName={this.state.lastName}
                profileURL={this.state.profileURL}
                pictureURL={this.state.pictureURL}
                location={this.state.location}
                positions={this.state.positions}
                // summary={this.state.summary}
                connectionsCount={this.state.connectionsCount}
                industry={this.state.industry}

              />
            )}
     
     <div className="Users">
        <h1>MeetUps</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
      </div>
    );
  }
}

export default App;