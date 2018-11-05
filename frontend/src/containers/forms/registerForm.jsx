// forms/registerForm.jsx - Register form component
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {types} from "../../constants/actionTypes";
import userActions from "../../actions/userActions";
import client from "../../utils/client";

function mapStateToProps(state)
{
	const {loggingIn} = state.authentication;
	return {
		loggingIn
	};
}

class RegisterForm extends Component {
	constructor(props)
	{
		super(props);
		
		this.state = {
			username: "",
			email: "",
			password1: "",
			password2: "",
			submitted: false
		};

		this.onFormChange = this.onFormChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount()
	{
		this.props.dispatch();
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

		if (email && username && password1 && password2) {
			if (password1 === password2) {
				dispatch();
			} else {
				console.log("Passwords do not match!");
			}
		}
	}
	
	render()
	{
		return (
			<form onSubmit={this.onFormSubmit(username, email,
											  password1, password2)}>
				<input type="text"
					   label="Username"
					   name="username"
					   placeholder="Username"
					   value={this.state.username}
					   onChange={this.onFormChange}/>
				
				<input type="text"
					   label="Email"
					   name="email"
					   placeholder="Email Address"
					   value={this.state.email}
					   onChange={this.onFormChange}/>
				
				<input type="password"
					   label="Password"
					   name="password1"
					   placeholder="Enter a password"
					   value={this.state.password1}
					   onChange={this.onFormChange}/>

				<input type="password"
					   label="Confirm"
					   name="password2"
					   placeholder="Confirm password"
					   value={this.state.password2}
					   onChange={this.onFormChange}/>
				
				<input type="submit"
					   value="Register"/>
			</form>
		);
	}
};

export default connect(mapStateToProps)(RegisterForm);
