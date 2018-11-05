// actions/userActions.js - Session action creators.
// Copywrite (C) 2018, Brett Broadhurst
//

import {history} from "../utils/history";
import {types} from "../constants/actionTypes";
import client from "../utils/client";

// User login action creator.
function loginUser(email, password)
{
	return dispatch => {
		dispatch(request({email}));

		client.login(email, password)
			  .then(user => {
				  dispatch({
					  type: types.AUTH_USER_SUCCESS,
					  user
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

	function request(user)
	{
		return {
			type: types.AUTH_USER_REQUEST,
			user
		};
	}
}

function registerUser(email, username, password)
{
	return dispatch => {
		dispatch(request({email}));

		client.register({email, username, password})
			  .then(newUser => {
				  dispatch({
					  type: types.REGISTER_USER_SUCCESS,
					  newUser
				  });

				  console.log("User Registered!");

				  dispatch(loginUser(email, password));
			  })
			  .catch(err => {
				  dispatch({
					  type: types.REGISTER_USER_FAILURE,
					  err,
				  });
				  
				  console.log(err);
			  });
	};
	
	function request(user)
	{
		return {
			type: types.REGISTER_USER_REQUEST,
			user
		}
	}
}

function logoutUser()
{
	client.logout();

	return {
		type: types.AUTH_USER_LOGOUT
	};
}

export function getAllUsers()
{

}

export {loginUser, registerUser, logoutUser};

