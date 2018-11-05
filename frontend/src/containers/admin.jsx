// containers/admin.jsx - Admin panel view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

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
			</div>
		);
	}
};

export default AdminView;
