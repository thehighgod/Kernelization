// containers/logout.jsx - Logout view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class LogoutView extends Component {
	componentDidMount()
	{
		document.title = "Logout | Kernelization";
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

export default LogoutView;
