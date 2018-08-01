import React, { Component } from 'react';
import './App.css';
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import SigninLI1 from './SigninLI1.png';
import Select from 'react-select';
import mulogo from './mulogo.png';
import mnl from './mnl.jpeg';
import meetup from './meetup.png';
import linkedin from './linkedin.png';
import Modal from 'react-responsive-modal';
import { GridLoader } from 'react-spinners';

var IN = null;

var text = ""

const options = [
  { value: 'Accounting', label: 'Accounting' },
  { value: 'Airlines/Aviation', label: 'Airlines/Aviation' },
  { value: 'Alternative Dispute Resolution', label: 'Alternative Dispute Resolution' },
  { value: 'Alternative Medicine', label: 'Alternative Medicine' },
  { value: 'Animation', label: 'Animation' },
  { value: 'Apparel & Fashion', label: 'Apparel & Fashion' },
  { value: 'Architecture & Planning', label: 'Architecture & Planning' },
  { value: 'Arts and Crafts', label: 'Arts and Crafts' },
  { value: 'Aviation & Aerospace', label: 'Aviation & Aerospace' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Biotechnology', label: 'Biotechnology' },
  { value: 'Broadcast Media', label: 'Broadcast Media' },
  { value: 'Business Supplies and Equipment', label: 'Business Supplies and Equipment' },
  { value: 'Capital Markets', label: 'Capital Markets' },
  { value: 'Chemicals', label: 'Chemicals' },
  { value: 'Civic & Social Organization', label: 'Civic & Social Organization' },
  { value: 'Civil Engineering', label: 'Civil Engineering' },
  { value: 'Commercial Real Estate', label: 'Commercial Real Estate' },
  { value: 'Computer & Network Security', label: 'Computer & Network Security' },
  { value: 'Computer Games', label: 'Computer Games' },
  { value: 'Computer Hardware', label: 'Computer Hardware' },
  { value: 'Computer Networking', label: 'Computer Networking' },
  { value: 'Computer Software', label: 'Computer Software' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Consumer Electronics', label: 'Consumer Electronics' },
  { value: 'Consumer Goods', label: 'Consumer Goods' },
  { value: 'Consumer Services', label: 'Consumer Services' },
  { value: 'Cosmetics', label: 'Cosmetics' },
  { value: 'Dairy', label: 'Dairy' },
  { value: 'Defense & Space', label: 'Defense & Space' },
  { value: 'Design', label: 'Design' },
  { value: 'Education Management', label: 'Education Management' },
  { value: 'E-Learning', label: 'E-Learning' },
  { value: 'Electrical/Electronic Manufacturing', label: 'Electrical/Electronic Manufacturing' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Environmental Services', label: 'Environmental Services' },
  { value: 'Events Services', label: 'Events Services' },
  { value: 'Executive Office', label: 'Executive Office' },
  { value: 'Facilities Services', label: 'Facilities Services' },
  { value: 'Farming', label: 'Farming' },
  { value: 'Financial Services', label: 'Financial Services' },
  { value: 'Fine Art', label: 'Fine Art' },
  { value: 'Fishery', label: 'Fishery' },
  { value: 'Food & Beverages', label: 'Food & Beverages' },
  { value: 'Food Production', label: 'Food Production' },
  { value: 'Fund-Raising', label: 'Fund-Raising' },
  { value: 'Furniture', label: 'Furniture' },
  { value: 'Gambling & Casinos', label: 'Gambling & Casinos' },
  { value: 'Glass, Ceramics & Concrete', label: 'Glass, Ceramics & Concrete' },
  { value: 'Government Administration', label: 'Government Administration' },
  { value: 'Government Relations', label: 'Government Relations' },
  { value: 'Graphic Design', label: 'Graphic Design' },
  { value: 'Health, Wellness and Fitness', label: 'Health, Wellness and Fitness' },
  { value: 'Higher Education', label: 'Higher Education' },
  { value: 'Hospital & Health Care', label: 'Hospital & Health Care' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Human Resources', label: 'Human Resources' },
  { value: 'Import and Export', label: 'Import and Export' },
  { value: 'Individual & Family Services', label: 'Individual & Family Services' },
  { value: 'Industrial Automation', label: 'Industrial Automation' },
  { value: 'Information Services', label: 'Information Services' },
  { value: 'Information Technology and Services', label: 'Information Technology and Services' },
  { value: 'Insurance', label: 'Insurance' },
  { value: 'International Affairs', label: 'International Affairs' },
  { value: 'International Trade and Development', label: 'International Trade and Development' },
  { value: 'Internet', label: 'Internet' },
  { value: 'Investment Banking', label: 'Investment Banking' },
  { value: 'Investment Management', label: 'Investment Management' },
  { value: 'Judiciary', label: 'Judiciary' },
  { value: 'Law Enforcement', label: 'Law Enforcement' },
  { value: 'Law Practice', label: 'Law Practice' },
  { value: 'Legal Services', label: 'Legal Services' },
  { value: 'Legislative Office', label: 'Legislative Office' },
  { value: 'Leisure, Travel & Tourism', label: 'Leisure, Travel & Tourism' },
  { value: 'Libraries', label: 'Libraries' },
  { value: 'Logistics and Supply Chain', label: 'Logistics and Supply Chain' },
  { value: 'Luxury Goods & Jewelry', label: 'Luxury Goods & Jewelry' },
  { value: 'Machinery', label: 'Machinery' },
  { value: 'Management Consulting', label: 'Management Consulting' },
  { value: 'Maritime', label: 'Maritime' },
  { value: 'Market Research', label: 'Market Research' },
  { value: 'Marketing and Advertising', label: 'Marketing and Advertising' },
  { value: 'Mechanical or Industrial Engineering', label: 'Mechanical or Industrial Engineering' },
  { value: 'Media Production', label: 'Media Production' },
  { value: 'Medical Devices', label: 'Medical Devices' },
  { value: 'Medical Practice', label: 'Medical Practice' },
  { value: 'Mental Health Care', label: 'Mental Health Care' },
  { value: 'Military', label: 'Military' },
  { value: 'Mining & Metals', label: 'Mining & Metals' },
  { value: 'Motion Pictures and Film', label: 'Motion Pictures and Film' },
  { value: 'Museums and Institutions', label: 'Museums and Institutions' },
  { value: 'Music', label: 'Music' },
  { value: 'Nanotechnology', label: 'Nanotechnology' },
  { value: 'Newspapers', label: 'Newspapers' },
  { value: 'Non-Profit Organization Management', label: 'Non-Profit Organization Management' },
  { value: 'Oil & Energy', label: 'Oil & Energy' },
  { value: 'Online Media', label: 'Online Media' },
  { value: 'Outsourcing/Offshoring', label: 'Outsourcing/Offshoring' },
  { value: 'Package/Freight Delivery', label: 'Package/Freight Delivery' },
  { value: 'Packaging and Containers', label: 'Packaging and Containers' },
  { value: 'Paper & Forest Products', label: 'Paper & Forest Products' },
  { value: 'Performing Arts', label: 'Performing Arts' },
  { value: 'Pharmaceuticals', label: 'Pharmaceuticals' },
  { value: 'Philanthropy', label: 'Philanthropy' },
  { value: 'Photography', label: 'Photography' },
  { value: 'Plastics', label: 'Plastics' },
  { value: 'Political Organization', label: 'Political Organization' },
  { value: 'Primary/Secondary Education', label: 'Primary/Secondary Education' },
  { value: 'Printing', label: 'Printing' },
  { value: 'Professional Training & Coaching', label: 'Professional Training & Coaching' },
  { value: 'Program Development', label: 'Program Development' },
  { value: 'Public Policy', label: 'Public Policy' },
  { value: 'Public Relations and Communications', label: 'Public Relations and Communications' },
  { value: 'Public Safety', label: 'Public Safety' },
  { value: 'Publishing', label: 'Publishing' },
  { value: 'Railroad Manufacture', label: 'Railroad Manufacture' },
  { value: 'Ranching', label: 'Ranching' },
  { value: 'Real Estate', label: 'Real Estate' },
  { value: 'Recreational Facilities and Services', label: 'Recreational Facilities and Services' },
  { value: 'Religious Institutions', label: 'Religious Institutions' },
  { value: 'Renewables & Environment', label: 'Renewables & Environment' },
  { value: 'Research', label: 'Research' },
  { value: 'Restaurants', label: 'Restaurants' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Security and Investigations', label: 'Security and Investigations' },
  { value: 'Semiconductors', label: 'Semiconductors' },
  { value: 'Shipbuilding', label: 'Shipbuilding' },
  { value: 'Sporting Goods', label: 'Sporting Goods' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Staffing and Recruiting', label: 'Staffing and Recruiting' },
  { value: 'Supermarkets', label: 'Supermarkets' },
  { value: 'Telecommunications', label: 'Telecommunications' },
  { value: 'Textiles', label: 'Textiles' },
  { value: 'Think Tanks', label: 'Think Tanks' },
  { value: 'Tobacco', label: 'Tobacco' },
  { value: 'Translation and Localization', label: 'Translation and Localization' },
  { value: 'Transportation/Trucking/Railroad', label: 'Transportation/Trucking/Railroad' },
  { value: 'Utilities', label: 'Utilities' },
  { value: 'Venture Capital & Private Equity', label: 'Venture Capital & Private Equity' },
  { value: 'Veterinary', label: 'Veterinary' },
  { value: 'Warehousing', label: 'Warehousing' },
  { value: 'Wholesale', label: 'Wholesale' },
  { value: 'Wine and Spirits', label: 'Wine and Spirits' },
  { value: 'Wireless', label: 'Wireless' },
  { value: 'Writing and Editing', label: 'Writing and Editing' }


];



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
      isLoaded: false,
      text: "",
      selectedOption: null,
      shown: false,
      menuPlacement: "auto",
      menuShouldScrollIntoView: true,
      MeetupsStyle: {
        marginBottom: 50
    },
      hover: false,
      loading: false,
      display: "none" 
    };
  }

  handleChange = (selectedOption) => {
    var elems = document.getElementsByClassName('meetup');
    for(var i = 0; i !== elems.length; ++i)
    {
    elems[i].style.visibility = "hidden";
    }
 
    this.setState({ selectedOption });
    setTimeout(() => this.setState({ loading: true }), 1000);
   
    console.log(`Option selected:`, selectedOption);
    console.log(selectedOption.value);
    text = selectedOption.value
    setTimeout(() => this.setState({ loading: false }), 2000);
    setTimeout(function(){
      document.getElementById('yellow').style.visibility = 'visible'; 
   }, 2000);
    this.getData(text);
 

  }

  



  getData = (text) => {
    var fetchUrl = "/users?text=${"+ text + "}"

    fetch(fetchUrl)
      .then(res => {
      return res.json()
      })
      
      .then(users => this.setState({ users: users }))

  }
  

  componentDidMount() {
    this.loadLinkedinJS();

    
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
    setTimeout(function(){ window.location.reload(); }, 2000);

  };

 

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
    text = profile.industry
    console.log(text)
    this.getData(text);
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

  onMouseOver(){

  }


  render() {
    const { selectedOption } = this.state;
    const { loading } = this.state;
    const {menuShouldScrollIntoView} = this.state
    const scope = {
      MeetupsStyle: {
          marginBottom: 0
      }
    };
    return (
      <div className="container">
            <img className="logoimage" src={mnl} alt="userimage" />

         {this.state.isAuthorized ? (
             
             <span>
              <button onClick={this.linkedinLogout}>Linkedin Logout</button> <br/>

              <img className="userimage" src={this.state.pictureURL} alt="userimage" />

                {/* <button onClick={this.shareToLinkedin}>Share on Linkedin</button> */}
              </span>
           ) : (

             <div></div>
           )}
     
      <div className="App">
   
      <h1 className="Welcome">Welcome to Meet & Link</h1>
      <h1>Sign in with your <img className="meetupText" src={linkedin} alt="meetupTextImage"/> account and see all <img className="meetupText" src={meetup} alt="meetupTextImage"/>'s related to your current job industry. </h1>
      <h1>Meetups are ordered by distance from your location</h1>
        {this.state.isAuthorized ? (
             
             <span>
              

                {/* <button onClick={this.shareToLinkedin}>Share on Linkedin</button> */}
              </span>
           ) : (

             
             <img className="liauth" src={SigninLI1} alt="myimage" onClick={this.linkedinAuthorize}/>
           )}
       
       
       {/* <header className="App-header">
       
       <h1 className="App-title">React Linkedin Login</h1>
       <p className="App-intro">A demo page for Linkedin login</p>
        </header> */}
        <div className="split left">
        <div className="centered">

        <div className="App-body">
    
      
          </div>
     
         {/* {this.state.isAuthorized &&
            this.state.summary && (
              <ProfileCard
                firstName={this.state.firstName}
                headline={this.state.headline}
                lastName={this.state.lastName}
                profileURL={this.state.profileURL}
                // pictureURL={this.state.pictureURL}
                location={this.state.location}
                positions={this.state.positions}
                // summary={this.state.summary}
                connectionsCount={this.state.connectionsCount}
                industry={this.state.industry}

              />
            )} */}
      
            </div>
     </div>

     <div className="split right">

     <div className="centered">
     {this.state.isAuthorized ? (
             
             <span>
      <h1>More knowledge, different industry. choose here to explore:</h1>

                <Select
        className={"selectmenu"}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        menuPlacement={"auto"}
        menuShouldScrollIntoView={true}
        onMouseOver={this.onMouseOver}
      />

              </span>
           ) : (

          <div></div>
           )}
   
 
   
        </div>
        <div className="loader">
        <GridLoader
      loaderStyle={{display: "block", margin: "0 auto", borderColor: 'red'}}
          color={'#0077B5'} 
          // size={"50"}
          loading={this.state.loading} 
        />
        </div>
        <div id="yellow" className="meetup">
      
        {this.state.users.map(user =>
          <figure key={user.id} className="snip1585">
          <div key={user.key_photo} className="image">
      
          <img src={mulogo} alt="groupImage"/>

          </div>
         
            <a key={user.link} href={user.link} target="_blank" > 
            <figcaption>
            <h3><span>{user.urlname}</span></h3>

          </figcaption>
  </a> 
          </figure>
        )}
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;