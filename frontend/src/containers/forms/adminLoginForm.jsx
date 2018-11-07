// forms/adminLoginForm.jsx - Login to the Admin panel.
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {loginAdmin, logoutAdmin} from "../../actions/adminActions";

function mapStateToProps(state)
{
	return state;
}

// Login form for the Admin panel.
class AdminLoginForm extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
			email: "",
			password: "",
			submitted: false,
			errors: {}
		};

		this.onFormChange = this.onFormChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount()
	{
		//this.props.dispatch(logoutAdmin());
	}

	onFormChange(event)
	{
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onFormSubmit(event)
	{
		event.preventDefault();
		this.setState({
			submitted: true
		});

		const {dispatch} = this.props;
		const email = this.state.email;
		const password = this.state.password;
		
		if (email && password) {
			//dispatch(loginAdmin(email, password));
		}
	}
	
	render()
	{
		return (
			<form className="k__login__form"
				  onSubmit={this.onFormSubmit} >
				<div className="k__login__form-header">
					<span>Login</span>
				</div>

				<div className="k__login__form-body">
					<input type="text"
						   label="email"
						   name="email"
						   placeholder="Enter your email"
						   value={this.state.email}
						   onChange={this.onFormChange} />
					
					<input type="password"
						   label="password"
						   name="password"
						   value={this.state.password}
						   placeholder="Enter your password"
						   onChange={this.onFormChange} />

					<hr />
					<input type="submit"
						   value="Login" />
				</div>
				<div className="k__login__form-footer">
				</div>
			</form>
		);
	}
};

export default connect(mapStateToProps)(AdminLoginForm);
