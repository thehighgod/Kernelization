// containers/admin.jsx - Admin panel view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

function mapStateToProps(state)
{

}

class AdminView extends Component {
	componentDidMount()
	{
		document.title = "Admin | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__admin">
				<h1>Admin</h1>
				<div className="k__admin-tables">

				</div>
			</div>
		);
	}
};

export default connect(mapStateToProps)(AdminView);
