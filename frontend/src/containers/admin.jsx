// containers/admin.jsx - Admin panel view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {AdminRoute} from "./adminRoute.jsx";

// Redux
function mapStateToProps(state)
{
	return state;
}

// Header for the admin interface.
const AdminHeader = (props) => {
	return (
		<header className="admin__header">
			
		</header>
	);
};

// Side toolbar for the admin interface.
const AdminSidebar = (props) => {
	return (
		<div className="admin__sidebar">
			<ul>
				<li>Dashboard</li>
				<li>Analytics</li>
				<li>Manager</li>
				<li>Schema</li>
				<li>Settings</li>
			</ul>
		</div>
	);
};

class AdminLogin extends Component {
	render()
	{
		return (
			<div className="admin__login">
				
			</div>
		);
	}
};

class AdminDashboard extends Component {
	render()
	{
		return (
			<div className="admin__dashboard">
				
			</div>
		);
	}
};

class AdminManager extends Component {
	render()
	{
		return (
			<div className="admin__manager">
				
			</div>
		);
	}
};

class AdminAnalytics extends Component {
	render()
	{
		return (
			<div className="admin__analytics">
				
			</div>
		);
	}
};

class AdminConfig extends Component {
	render()
	{
		return (
			<div className="admin__config">
				
			</div>
		);
	}
};

class AdminSettings extends Component {
	render()
	{
		return (
			<div className="admin__settings">
				
			</div>
		);
	}
};

// Main display for the admin interface.
class AdminMain extends Component {
	render()
	{
		return (
			<div className="admin__main">
				<Switch>
					<AdminRoute exact path="/admin/dashboard"
								component={AdminDashboard}/>
					<AdminRoute exact path="/admin/analytics"
								component={AdminAnalytics}/>
					<AdminRoute exact path="/admin/manager"
								component={AdminManager}/>
					<AdminRoute exact path="/admin/config"
								component={AdminConfig}/>
					<AdminRoute exact path="/admin/settings"
								component={AdminSettings}/>
				</Switch>
			</div>
		);
	}
};

// Footer for the admin interface.
const AdminFooter = (props) => {
	return (
		<footer className="admin__footer">
			
		</footer>
	);
};

const AdminCard = (props) => {
	return (
		<div className="admin__card">
			<div className="admin__card__head">
				
			</div>
			
			<div className="admin__card__head">

			</div>
		</div>
	);
};

const AdminManagerList = (props) => {
	return (
		<table className="manager__list">
			<thead>
				<tr>

				</tr>
			</thead>

			<tbody>
				
			</tbody>
		</table>
	);
}

class AdminView extends Component {
	componentDidMount()
	{
		document.title = "Admin | Kernelization";
	}
	
	render()
	{
		return (
			<div className="k__admin">
				<AdminHeader />
				<AdminSidebar />
				<AdminMain />
			</div>
		);
	}
};

export default connect(mapStateToProps)(AdminView);
