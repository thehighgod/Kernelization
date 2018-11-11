// containers/comingSoon.jsx - Coming soon view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class ComingSoonView extends Component {
	componentDidMount()
	{
		document.title = "Coming Soon | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__coming-soon">
				<center><h1>Coming Soon!</h1></center>
			</div>
		);
	}
};

export default ComingSoonView;
