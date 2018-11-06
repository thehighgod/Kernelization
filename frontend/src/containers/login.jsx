// containers/login.jsx - Login view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import LoginForm from "./forms/loginForm.jsx";

class LoginView extends Component {
	componentDidMount()
	{
		document.title = "Login | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__login">
				<LoginForm />
			</div>
		);
	}
};

export default LoginView;
