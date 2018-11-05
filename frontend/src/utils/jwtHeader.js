// utils/jwtHeader.js - JWT Auth Header
// Copywrite (C) 2018, Brett Broadhurst
//

export function authHeader()
{
	let user = JSON.parse(localStorage.getItem("user"));

	if (user && user.token) {
		return {
			"Authorization": "Bearer " + user.token
		};
	} else {
		return {};
	}
}
