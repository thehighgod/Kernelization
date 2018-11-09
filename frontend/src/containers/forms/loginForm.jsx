// forms/loginForm.jsx - Login form
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../../actions/userActions";

function mapStateToProps(state)
{
	const {loggingIn} = state.authReducer;
	return {
		loggingIn
	};
}

class LoginForm extends Component {
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
		const email = this.state.email;
		const password = this.state.password;
		
		if (email && password) {
			dispatch(loginUser(email, password));
		}
	}
	
	render()
	{
		return (
			<div className="k__auth-form">
				<h1 className="k__auth-header">Login</h1>
				<form onSubmit={this.onFormSubmit}>
					<div className="form-wrap">
						<div className="form-row">
							<div className="form-item">
								<div className="form-input">
									<input type="text"
										   label="email"
										   name="email"
										   placeholder="Email"
										   value={this.state.email}
										   onChange={this.onFormChange} />
									<span className="k__auth-input-border">
									</span>
								</div>
							</div>
						</div>
						
						<div className="form-row">
							<div className="form-item">
								<div className="form-input">
									<input type="password"
										   label="password"
										   name="password"
										   value={this.state.password}
										   placeholder="Password"
										   onChange={this.onFormChange} />
									<span className="k__auth-input-border">
									</span>
								</div>
							</div>
						</div>

						<div className="form-buttons">
							<input className="btn"
								   type="submit"
								   value="Login" />
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default connect(mapStateToProps)(LoginForm);
