// containers/adminAnalytics.jsx - Admin analytics
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

// Admin analytics view.
class AdminAnalytics extends Component {
	constructor(props)
	{
		super(props);

		document.title = "Analytics | KAdmin";
	}
	
	render()
	{
		return (
			<div className="admin__analytics">
				
			</div>
		);
	}
};

export default AdminAnalytics;
