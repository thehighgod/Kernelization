// containers/adminManager.jsx - Admin manager
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

// Admin manager view.
class AdminManager extends Component {
	constructor(props)
	{
		super(props);

		document.title = "Manager | KAdmin";
	}
	
	render()
	{
		return (
			<div className="admin__manager">
				
			</div>
		);
	}
};

export default AdminManager;
