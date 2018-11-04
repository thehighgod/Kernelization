// src/App.jsx - App container.
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Views
import LandingView from "./landing.jsx";
import LoginView from "./login.jsx";
import RegisterView from "./register.jsx";
import BootcampView from "./bootcamp.jsx";
import ContestsView from "./contests.jsx";
import AdminView from "./admin.jsx";
import Error404View from "./404.jsx";

import "../stylesheets/main.scss";

class App extends Component {
    render()
	{
        return (
            <Router>
				<div className="App">	
					<Switch>
						<Route exact path="/" component={LandingView}/>
						<Route exact path="/login" component={LoginView}/>
						<Route exact path="/register" component={RegisterView}/>
						<Route exact path="/bootcamp" component={BootcampView}/>
						<Route exact path="/contests" component={ContestsView}/>
						<Route exact path="/admin" component={AdminView}/>
			 			<Route path="*" component={Error404View}/> 
					</Switch>
				</div>
			</Router>
  
        );
    }
}

export default App;
