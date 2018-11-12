// containers/user/userProfile.jsx - User profile page.
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import client from "../../utils/client";

function mapStateToProps(state)
{
	return {
		userProfile: state.userProfileReducer
	};
}

// User Profile Page Container
class UserProfileView extends Component {
	constructor(props)
	{
		super(props);
		
		this.state = {
			user: {}
		};
	}

	componentWillMount()
	{
		const {username} = this.props.match.params;
		
		client.getUser(username, res => {
			this.setState({user: res.user});
			document.title = `${res.user.username} | Kernelization`;
			this.forceUpdate();
		});
	}
	
	render()
	{
		if (this.state.user == {}) {
			return (
				<h1>User Not Found</h1>
			);
		} else {
			return (
				<div className="k__profile">
					<h1>{this.state.user.username}</h1>
				</div>
			);
		}
	}
};

export default UserProfileView;
