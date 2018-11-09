// forms/registerForm.jsx - Register form component
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {types} from "../../constants/actionTypes";
import {registerUser, logoutUser} from "../../actions/userActions";

function mapStateToProps(state)
{
	const {loggingIn} = state.authReducer;
	const {registering} = state.registerReducer;
	
	return {
		loggingIn,
		registering
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
		this.props.dispatch(logoutUser());
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
		const {email, username, password1, password2} = this.state;

		if (email && username && password1 && password2) {
			if (password1 === password2) {
				dispatch(registerUser(email, username, password1));
			} else {
				console.log("Passwords do not match!");
			}
		}
	}
	
	render()
	{
		return (
			<div className="k__auth-form">
				<h1 className="k__auth-header">Register</h1>
				<form onSubmit={this.onFormSubmit}>
					<div className="form-wrap">
						<div className="form-row">
							<div className="form-item">
								<div className="form-input">
									<input type="text"
										   label="Username"
										   name="username"
										   placeholder="Username"
										   value={this.state.username}
										   onChange={this.onFormChange}/>
									<span className="k__auth-input-border">
									</span>
								</div>
							</div>
						</div>

						<div className="form-row">
							<div className="form-item">
								<div className="form-input">
									<input type="text"
										   label="Email"
										   name="email"
										   placeholder="Email Address"
										   value={this.state.email}
										   onChange={this.onFormChange}/>
									<span className="k__auth-input-border">
									</span>
								</div>
							</div>
						</div>
				
						<div className="form-row">
							<div className="form-item">
								<div className="form-input">
									<input type="password"
										   label="Password"
										   name="password1"
										   placeholder="Enter a password"
										   value={this.state.password1}
										   onChange={this.onFormChange}/>
									<span className="k__auth-input-border">
									</span>
								</div>
							</div>
						</div>
						
						<div className="form-row">
							<div className="form-item">
								<div className="form-input">
									<input type="password"
										   label="Confirm"
										   name="password2"
										   placeholder="Confirm password"
										   value={this.state.password2}
										   onChange={this.onFormChange}/>
									<span className="k__auth-input-border">
									</span>
								</div>
							</div>
						</div>

						<div className="form-buttons">
							<input className="btn"
								   type="submit"
								   value="Register" />
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default connect(mapStateToProps)(RegisterForm);
