// containers/kernelization.jsx - Single page app.
// Copywrite(C) 2018, Bret Broadhurst
//

import React, {Component, Fragment} from "react";
import {Router, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {history} from "../utils/history";
import {AdminRoute} from "./routes/adminRoute.jsx";
import {AuthRoute} from "./routes/authRoute.jsx";

// Main Layout
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

// Views
import LandingView from "./landing.jsx";
import AboutView from "./about.jsx";
import LoginView from "./login.jsx";
import RegisterView from "./register.jsx";
import DashboardView from "./dashboard.jsx";
import BootcampView from "./bootcamp/bootcamp.jsx";
import ContestsView from "./contests.jsx";
import AdminView from "./admin/admin.jsx";
import AdminLogin from "./admin/adminLogin.jsx";
import Error404View from "./404.jsx";

// Redux
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
				<Fragment>
					<Header />
					<div className="k__body">
						<Switch>
							<Route exact path="/"
								   component={LandingView}/>
							<Route exact path="/about"
								   component={AboutView}/>
							<Route exact path="/login"
								   component={LoginView}/>
							<Route exact path="/register"
								   component={RegisterView}/>
							<AuthRoute exact path="/dashboard"
									   component={DashboardView}/>
							<AuthRoute exact path="/bootcamp"
									   component={BootcampView}/>
							<AuthRoute exact path="/contests"
									   component={ContestsView}/>
							<AdminRoute exact path="/admin"
										render={() => {
											return (
												<Redirect to="/admin/login" />
											);
										}}/>
											
							<Route exact path="/admin/login"
										component={AdminLogin}/>
							<Route path="*"
								   component={Error404View}/> 
						</Switch>
					</div>
					<Footer />
				</Fragment>
			</Router>
		);
	}
};

export default Kernelization = connect(mapStateToProps)(Kernelization);
