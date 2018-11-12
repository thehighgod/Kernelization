// utils/client.js - Client API Methods
// Copywrite (C) 2018, Brett Broadhurst
//

const API_LINK = "http://crevolute.com";
const API_VERSION = "/api/v1";
const API_ROOT = `${API_VERSION}`;

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
	}).then(checkLogin)
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

function getUser(userId, success)
{
	return fetch(`${API_ROOT}/users/${userId}`, {
		headers: {
			Accept: "application/json"
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

function checkLogin(response)
{
	return response.text().then(text => {
		const data = text && JSON.parse(text);

		if (!response.ok) {
			if (response.status === 401) {
				logoutUser();
				location.reload(true);
			}

			const err = (data && data.message) || response.statusText;
			return Promise.reject(err);
		}

		return data;
	});
}

// Error checking.
function checkStatus(response)
{
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		console.log(response.message);
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
	getUsers: getUsers,
	getUser: getUser
};
