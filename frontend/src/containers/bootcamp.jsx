// containers/bootcamp.jsx - Bootcamp view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class BootcampView extends Component {
	componentDidMount()
	{
		document.title = "Bootcamp | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__bootcamp">
				<h1>Bootcamp</h1>
			</div>
		);
	}
};

export default BootcampView;
