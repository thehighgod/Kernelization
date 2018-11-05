// src/reducers/registerReducer.js - Registraction action reducer.
// Copywrite (C) 2018, Brett Broadhurst
//

import types from "../constants/actionTypes";

const initialState = {
	
};

function registerReducer(state = initialState, action)
{
	switch(action.type) {
	case types.REGISTER_USER_SUCCESS:
		return state;
		
	case types.REGISTER_USER_FAILURE:
		return state;
		
	default:
		return state;
	}
}

export default registerReducer;
