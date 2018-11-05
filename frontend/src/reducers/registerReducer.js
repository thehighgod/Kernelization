// src/reducers/registerReducer.js - Registraction action reducer.
// Copywrite (C) 2018, Brett Broadhurst
//

import {types} from "../constants/actionTypes";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? {loggedIn: true, user} : {};

export function registerReducer(state = initialState, action)
{
	switch(action.type) {
		case types.REGISTER_USER_REQUEST:
			return {
				registering: true,
				user: action.user
			};
			
		case types.REGISTER_USER_SUCCESS:
			return {
				registered: true,
				loggedIn: true,
				user: action.user
			};
		
		case types.REGISTER_USER_FAILURE:
			return {};
		
		default:
			return state;
	}
}


