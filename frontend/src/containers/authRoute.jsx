// containers/authRoute.jsx - Authenticated Route
// Copywrite (C) 2018, Brett Broadhurst
//

import React from "react";
import {Route, Redirect} from "react-router-dom";

export const AuthRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => {
		return localStorage.getItem("user")
		? <Component {...props} />
		: <Redirect to={{pathname: "/login", state: {from: props.location}}} />
		}} />
);
