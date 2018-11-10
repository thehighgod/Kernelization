// containers/user/userProfile.jsx - User profile page.
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function mapStateToProps(state)
{
	return {
		userProfile: state.userProfileReducer
	};
}

class UserProfileView extends Component {
	constructor(props)
	{
		super(props);
		
		this.state = {
			user: null
		};
	}

	componentDidMount()
	{
		const {username} = this.props.match.params;

		document.title = `${username} | Kernelization`;
	}
	
	render()
	{
		if (!this.state.user) {
			return (
				<h1>User Not Found</h1>
			);
		} else {
			return (
				<div className="k__profile">
					<h1>{this.state.user}</h1>
				</div>
			);
		}
	}
};

export default connect(mapStateToProps)(UserProfileView);
