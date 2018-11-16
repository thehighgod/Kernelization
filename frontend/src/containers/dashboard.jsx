// containers/dashboard.jsx - Dashboard view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

function mapStateToProps(state){
	const {authReducer} = state;
	const {user} = authReducer;
	return {
		user
	};
};

class DashboardView extends Component {
	componentDidMount()
	{
		document.title = "Dashboard | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__dashboard">
				<div className="dash-header">
					<h1>Dashboard</h1>
					<h3>This page is under construction.</h3>
				</div>
				
				<div className="dash-body">
					<div className="dash-status">
						<p>Your status will go here.</p>
					</div>
					
					<div className="dash-news">
						<p>News feed will go here.</p>
					</div>
				</div>

				<div className="dash-side">
					
				</div>
			</div>
		);
	}
};

export default connect(mapStateToProps)(DashboardView);
