// admin/adminDashboard.jsx - Admin dashboard
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

// Admin dashboard view.
class AdminDashboard extends Component {
	constructor(props)
	{
		super(props);

		document.title = "Dashboard | KAdmin";
	}
	
	render()
	{
		return (
			<div className="admin__dashboard">
				
			</div>
		);
	}
};

export default AdminDashboard;
