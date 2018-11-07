import React from "react";
import {Route, Redirect} from "react-router-dom";

export const AdminRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => {
		if (localStorage.getItem("user")) {
			if (localStorage.getItem("user").isAdmin) {
				return (
					<Component {...props} />
				);
			} else {
				return (
					<Redirect to={{pathname: "/admin/login",
								   state: {from: props.location}}} />
				);
			}
		} else {
			return (
				<Redirect to={{pathname: "/admin/login",
							   state: {from: props.location}}} />
			);
		}
		
	}}/>
);
