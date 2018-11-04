// containers/login.jsx - Login view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class LoginForm extends Component {
	constructor(props)
	{
		super(props);
		
		this.state = {
			login: {
				email: "",
				passsord: ""
			},
			
			errors: [
				
			]
		};

		this.onFormChange = this.onFormChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormChange(event)
	{
		const field = event.target.name;
		const creds = this.state.login;
		creds[field] = event.target.value;
		
		this.setState({
			login: creds
		});
	}

	onFormSubmit(event)
	{
		event.preventDefault();
	}
	
	render()
	{
		return (
			<form className="k__login__form"
				  onSubmit={this.onFormSubmit} >
				
				<input type="text"
					   label="email"
					   name="email"
					   placeholder="Enter your email"
					   value={this.state.login.email}
					   onChange={this.onFormChange} />
				
				<input type="password"
					   label="password"
					   name="password"
					   value={this.state.login.password}
					   placeholder="Enter your password"
					   onChange={this.onFormChange} />
				
				<input type="submit"
					   value="Login" />
			</form>
		);
	}
};

class LoginView extends Component {
	componentDidMount()
	{
		document.title = "Login | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__login">
				<h1>Login</h1>

				<LoginForm />
			</div>
		);
	}
};

export default LoginView;
