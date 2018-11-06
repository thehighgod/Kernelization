// middleware/check_permissions.js - Middleware for checking permissions. 
//
//

const jwt = require("jsonwebtoken");

// This middleware verifies whether a user is an admin or not.
// Add this to routes you want admin protected.
module.exports = function(req, res, next)
{
	try {
		if (req.userData.isAdmin) {
			console.log("Good!");
			next();
		} else {
			return res.status(401).json({
				message: "You do not have permission to access this."
			});
		}
		
	} catch (err) {
		return res.status(401).json({
			message: "You do not have permission to access this."
		});
	}
}
