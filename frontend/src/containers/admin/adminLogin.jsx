// admin/adminLogin.jsx - Admin login view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import AdminLoginForm from "../forms/adminLoginForm.jsx";

// Admin login view.
class AdminLogin extends Component {
	constructor(props)
	{
		super(props);

		document.title = "Login | KAdmin";
	}
	
	render()
	{
		return (
			<div className="admin__login">
				<AdminLoginForm />
			</div>
		);
	}
};

export default AdminLogin;
