// containers/register.jsx - Register view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import RegisterForm from "./forms/registerForm.jsx";

class RegisterView extends Component {
	componentDidMount()
	{
		document.title = "Register | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__register">
				<center>
					<h1>Nice to have you!</h1>
				</center>
				<RegisterForm/>
			</div>
		);
	}
};

export default RegisterView;
