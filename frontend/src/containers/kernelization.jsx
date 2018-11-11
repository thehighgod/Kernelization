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

// Views //
// Anonymous Views
import LandingView from "./landing.jsx";
import AboutView from "./about.jsx";
import LoginView from "./login.jsx";
import RegisterView from "./register.jsx";

// User Views
import DashboardView from "./dashboard.jsx";
import UserProfileView from "./user/userProfile.jsx";
import LogoutView from "./logout.jsx";

// Bootcamp Views
import BootcampView from "./bootcamp/bootcamp.jsx";
import CyberBootcampView from "./bootcamp/cybersecurity.jsx";
//import AIBootcampView from "./bootcamp/ai.jsx";

// Admin Views
import AdminView from "./admin/admin.jsx";
import AdminLogin from "./admin/adminLogin.jsx";

// Error Views
import Error404View from "./404.jsx";
import ComingSoonView from "./comingSoon.jsx";

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
							<Route exact path="/" component={LandingView}/>
							<Route path="/about" component={AboutView}/>
							<Route path="/login" component={LoginView}/>
							<Route path="/logout" component={LogoutView}/>
							<Route path="/register" component={RegisterView}/>
							
							<Route path="/profile/:username" component={UserProfileView}/>
							<AuthRoute path="/dashboard" component={DashboardView}/>
							
							<AuthRoute exact path="/bootcamp" component={BootcampView}/>
							<AuthRoute path="/bootcamp/cybersecurity" component={CyberBootcampView}/>
							<AuthRoute path="/bootcamp/artificialintelligence" component={ComingSoonView}/>
							<AuthRoute path="/bootcamp/blockchain" component={ComingSoonView}/>
							
							<AuthRoute path="/contests" component={ComingSoonView}/>
							
							<AdminRoute path="/admin"
										render={() => {
											return (<Redirect to="/admin/login" />);
										}}/>
											
							<Route path="/admin/login" component={AdminLogin}/>
							<Route path="*" component={Error404View}/> 
						</Switch>
					</div>
					<Footer />
				</Fragment>
			</Router>
		);
	}
};

export default Kernelization = connect(mapStateToProps)(Kernelization);
