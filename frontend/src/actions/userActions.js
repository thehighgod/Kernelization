// actions/userActions.js - Session action creators.
// Copywrite (C) 2018, Brett Broadhurst
//

import {history} from "../utils/history";
import {types} from "../constants/actionTypes";
import client from "../utils/client";

export function loginUser(email, password)
{
	return dispatch => {
		dispatch({
			type: types.AUTH_USER_REQUEST,
			email
		});

		client.login(email, password)
			  .then(user => {
				  dispatch({
					  type: types.AUTH_USER_SUCCESS
				  });

				  //dispatch(push("/dashboard"));

				  history.push("/dashboard");
				  
			  })
			  .catch(err => {
				  dispatch({
					  type: types.AUTH_USER_FAILURE,
					  err
				  });

				  console.log(err);
			  });
	};
}

export function registerUser(email, username, password)
{
	
}

export function logoutUser()
{
	client.logout();

	return {
		type: types.AUTH_USER_LOGOUT
	};
}

export function getAllUsers()
{

}


