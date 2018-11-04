// containers/404.jsx - 404 Error view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class Error404View extends Component {
	componentDidMount()
	{
		document.title = "Page Not Found | Kernelization";
	}
	
	render() {
		return (
			<div className="k__not-found">
				<h1>404 - Page Not Found.</h1>
			</div>
		);
	}
};

export default Error404View;
