// containers/dashboard.jsx - Dashboard view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

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

export default DashboardView;
