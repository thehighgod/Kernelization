// containers/logout.jsx - Logout view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {logoutUser} from "../actions/userActions";

function mapStateToProps(state)
{
	return state;
}

class LogoutView extends Component {
	componentDidMount()
	{
		document.title = "Logout | Kernelization";

		this.props.dispatch(logoutUser());
	}

	render()
	{
		return (
			<div className="k__logout">
				<h1>You are now logged out!</h1>
				<h2>Come back soon!</h2>
			</div>
		);
	}
};

export default connect(mapStateToProps)(LogoutView);
