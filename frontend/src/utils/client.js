// utils/client.js - Client API Methods
// Copywrite (C) 2018, Brett Broadhurst
//

// Return list of users from the API.
function getUsers(success)
{
	return fetch("/api/v1/users/",{
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
	return fetch("/api/v1/boxes/",{
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
		const err = new Error(`HTTP Error ${response.statusText}`);
		err.status = response.statusText;
		err.response = response;
		console.log(err);
		throw err;
	}
}

// Parse JSON
function parseJSON(data)
{
	return data.json();
}

module.exports = {
	getBoxes: getBoxes,
	getUsers: getUsers
};
