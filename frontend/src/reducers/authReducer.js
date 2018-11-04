// src/reducers/auth.js - Reducer for session actions.
// Copywrite (C) 2018, Brett Broadhurst
//

const initialState = {
	formState: {
		email: "",
		password: ""
	},
	loggedIn: false
};

export function authReducer(state = initialState, action)
{
	switch(action.type) {
	case 1:
		return {
			loggedIn: true
		};
		
	default:
		return state;
	}
}
