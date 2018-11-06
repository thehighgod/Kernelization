// src/reducers/authReducer.js - Authentication action reducer.
// Copywrite (C) 2018, Brett Broadhurst
//

import {types} from "../constants/actionTypes";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? {loggedIn: true, user} : {};

// Reducer for authentication actions.
export function authReducer(state = initialState, action)
{
	switch(action.type) {
		case types.AUTH_USER_REQUEST:
			return {
				loggingIn: true,
				user: action.user
			};
		case types.AUTH_USER_SUCCESS:
			return {
				loggedIn: true,
				user: action.user
			};
		case types.AUTH_USER_FAILURE:
			return {};
		case types.AUTH_USER_LOGOUT:
			return {};

		default:
			return state;
	}
}
