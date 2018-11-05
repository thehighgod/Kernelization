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
				<h1>Dashboard</h1>
			</div>
		);
	}
};

export default connect(mapStateToProps)(DashboardView);
