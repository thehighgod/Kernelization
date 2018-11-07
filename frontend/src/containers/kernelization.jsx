// containers/kernelization.jsx - Single page app.
// Copywrite(C) 2018, Bret Broadhurst
//

import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {history} from "../utils/history";
import {AuthRoute} from "./authRoute.jsx";

// Main Layout
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

// Views
import LandingView from "./landing.jsx";
import LoginView from "./login.jsx";
import RegisterView from "./register.jsx";
import DashboardView from "./dashboard.jsx";
import BootcampView from "./bootcamp.jsx";
import ContestsView from "./contests.jsx";
import AdminView from "./admin.jsx";
import Error404View from "./404.jsx";

function mapStateToProps(state)
{
	return state;
}

// Main Application
class Kernelization extends Component {
	constructor(props)
	{
		super(props);

		const {dispatch} = this.props;
		history.listen((location, action) => {
			//dispatch();
		});
	}
	
	render()
	{
		return (
			<Router history={history}>
				<React.Fragment>
					<Header />
					<div className="k__body">
						<Switch>
							<Route exact path="/" component={LandingView}/>
							<Route exact path="/login" component={LoginView}/>
							<Route exact path="/register" component={RegisterView}/>
							<AuthRoute exact path="/dashboard" component={DashboardView}/>
							<AuthRoute exact path="/bootcamp" component={BootcampView}/>
							<AuthRoute exact path="/contests" component={ContestsView}/>
							<AuthRoute exact path="/admin" component={AdminView}/>
							<Route path="*" component={Error404View}/> 
						</Switch>
					</div>
					<Footer />
				</React.Fragment>
			</Router>
		);
	}
};

export default Kernelization = connect(mapStateToProps)(Kernelization);
