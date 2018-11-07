// containers/adminConfig.jsx - Admin configure
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

// Admin config view.
class AdminConfig extends Component {
	constructor(props)
	{
		super(props);

		document.title = "Configure | KAdmin";
	}
	
	render()
	{
		return (
			<div className="admin__config">
				
			</div>
		);
	}
};

export default AdminConfig;
