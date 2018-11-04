// containers/register.jsx - Register view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class RegisterView extends Component {
	componentDidMount()
	{
		document.title = "Register | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__register">
				<h1>Register</h1>
			</div>
		);
	}
};

export default RegisterView;
