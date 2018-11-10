// reducers/userProfileReducer - User profile action reducer.
// Copywrite (C) 2018, Brett Broadhurst
//

import {types} from "../constants/actionTypes";

const initialState = null;

export function userProfileReducer(state = initialState, action)
{
	switch (action.type) {
		case types.SET_USER:
			return action.payload;

		default:
			return state;
	}
}
