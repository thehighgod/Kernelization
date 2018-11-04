// containers/contests.jsx - Contests view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class ContestsView extends Component {
	componentDidMount()
	{
		document.title = "Contests | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__contests">
				<h1>Contests</h1>
			</div>
		);
	}
};

export default ContestsView;
