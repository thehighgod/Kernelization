// admin/adminSettings.jsx - Admin settings
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

// Admin settings view.
class AdminSettings extends Component {
	constructor(props)
	{
		super(props);

		document.title = "Settings | Admin";
	}
	
	render()
	{
		return (
			<div className="admin__settings">
				
			</div>
		);
	}
};

export default AdminSettings;
