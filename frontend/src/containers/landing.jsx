// containers/landing.js - Landing view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class LandingView extends Component {
	componentDidMount()
	{
		document.title = "Welcome | Kernelization";
	}
	
	render()
	{
		return (
			<div className="landing">
				<h1>Kernelization</h1>
			</div>
		);
	}
};

export default LandingView;
