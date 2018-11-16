// containers/user/userProfile.jsx - User profile page.
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import client from "../../utils/client";

// Unused thus far.
function mapStateToProps(state)
{
	return {
		userProfile: state.userProfileReducer
	};
}

// Stateless component for user badge.
const UserBadge = (props) => {
	return (
		<div className="badge profile-badge">
			
		</div>
	);
};

// Display badges earned by the user.
class UserBadgeList extends Component {
	render()
	{
		const badges = this.props.badges.map(badge => {
			return (
				<UserBadge name={badge.name}
						   image={badge.image}
						   earned={badge.earned}/>
			);
		});
		
		return (
			<div className="user-badges-list">
				
			</div>
		);
	}
};

// Circle progress bar.
class RadialProgress extends Component {
	render()
	{
		return (
			<div className="progres-bar--radial">
				<span className="label">{this.props.name}<span className="small">%</span></span>
				<div className="pie">
					<div className="left-circle half-circle"></div>
					<div className="right-circle half-circle"></div>
				</div>
			</div>
		);
	}
};

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
			console.log(this.state.user);
		});
	}
	
	render()
	{
		if (this.state.user == {}) {
			return (
				<center>
					<h1>User Not Found</h1>
				</center>
			);
		} else {
			return (
				<div className="k__profile">
					<div className="profile-header">
						<img className="profile-image" src={this.state.user.image}/>
						<h1 className="profile-name">{this.state.user.username}</h1>
						<p className="profile-status">&quot;{this.state.user.status}&quot;</p>
						
						<div className="profile-stats">
							<RadialProgress name="Level"/>
							<p className="p-stats-level">
								<span>Level: </span>
								<span>{this.state.user.level}</span></p>
							<p className="p-stats-xp">
								<span>XP: </span>
								<span>{this.state.user.xp}</span></p>
							<p className="p-stats-rep">
								<span>REP: </span>
								<span>{this.state.user.rep}</span></p>
						</div>
						
					</div>
					<div className="profile-body">
						<div className="profile-bio">
							<p>{this.state.user.bio}</p>
						</div>
						
						<div className="profile-badges">
							
						</div>
					</div>
				</div>
			);
		}
	}
};

export default UserProfileView;
