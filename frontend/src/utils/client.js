// utils/client.js - Client API Methods
// Copywrite (C) 2018, Brett Broadhurst
//

const API_ROOT = "/api/v1";

// Send a POST request asking to authenticate
// a registered user.
function loginUser(email, password)
{
	return fetch(`${API_ROOT}/users/login`, {
		method: "POST",
		body: JSON.stringify({email, password}),
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}).then(checkStatus)
	  .then(user => {
		  if (user.token) {
			  localStorage.setItem("user", JSON.stringify(user));
		  }

		  return user;
	  });
}

// Remove the token from localStorage, logging out
// the user.
function logoutUser()
{
	localStorage.removeItem("user");
}

// Send a POST request with a user object
// to register.
function registerUser(newUser)
{
	return fetch(`${API_ROOT}/users/register`, {
		method: "POST",
		body: JSON.stringify(newUser),
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}).then(checkStatus);
}

// Return list of users from the API.
function getUsers(success)
{
	return fetch(`${API_ROOT}/users/`,{
		headers: {
			Accept: "application/json",
		}
	}).then(checkStatus)
		.then(parseJSON)
		.then(success);
}

// Return list of boxes from the API.
function getBoxes(success)
{
	return fetch(`${API_ROOT}/boxes/`,{
		headers: {
			Accept: "application/json",
		}
	}).then(checkStatus)
		.then(parseJSON)
		.then(success);
}

// Error checking.
function checkStatus(response)
{
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		console.log(response);
		const err = new Error(`HTTP Error ${response.statusText}`);
		err.status = response.statusText;
		err.response = response;
		console.log(err);
		throw err;
	}
}

// Parse JSON
function parseJSON(response)
{
	return response.json();
}

module.exports = {
	getBoxes: getBoxes,
	login: loginUser,
	logout: logoutUser,
	register: registerUser,
	getUsers: getUsers
};
