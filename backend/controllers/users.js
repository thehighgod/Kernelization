// backend/controllers/users.js - User model controller
// Copywrite (C) 2018, Brett Broadhurst
//

const bcrypt   = require('bcrypt');
const jwt      = require('jsonwebtoken');
const mongoose = require('mongoose');
const User     = require('../models/user');

const API_VERSION = "v1";
const API_LINK = `https://localhost:3000/api/${API_VERSION}`;
const API_MODEL = "users";

// Return all registered users.
exports.getUsers = function(req, res, next)
{	
	User.find()
		.select("username email role isAdmin _id")
		.exec()
		.then(users => {
			const response = {
				count: users.length,
				users: users.map(user => {
					return {
						username: user.username,
						email: user.email,
						role: user.role,
						isAdmin: user.role,
						_id: user._id,
						request: {
							type: "GET",
							url: `${API_LINK}/${API_MODEL}/`
							   + user._id
						}
					};
				})
			};
			
			res.status(200).json(users);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
};

// Return a select user.
exports.getUser = function(req, res, next)
{
	const id = req.params.userId;

	User.findById(id)
		.select("username email role isAdmin _id")
		.exec()
		.then(user => {
			console.log(user);

			if (user) {
				res.status(200).json({
					user: user,
					request: {
						type: "GET",
						url: `${API_LINK}/${API_MODEL}/`
						   + user._id
					}
				});
			} else {
				res.status(404).json({
					message: "No entry found for provided ID."
				});
			}
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

// Edit a select user.
exports.editUser = function(req, res, next)
{
	res.status(200).json({
		message: "Handling PUT request."
	});
};

// Delete a user.
exports.deleteUser = function(req, res, next)
{
	const id = req.params.userId;
	User.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: "User deleted."
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

// Create a new user.
exports.registerUser = function(req, res, next)
{
	// Check if the email is already assigned to a user.
	User.find({email: req.body.email})
		.exec()
		.then(users => {
			if (users.length >= 1) {
				return res.status(409).json({
					message: "Email already registered."
				});	
			} else {
				// Hash the password.
				bcrypt.hash(req.body.password, 10, function(err, hash) {
					if (err) {
						return res.status(500).json({
							error: err
						});
					} else {
						// Create a new User.
						const user = new User({
							_id: new mongoose.Types.ObjectId(),
							email: req.body.email,
							username: req.body.username,
							password: hash
						});

						// Add the user to the database.
						user.save()
							.then(result => {
								console.log(result);
								res.status(200).json({
									message: "User created!"
								});
							})
							.catch(err => {
								console.log(err);
								res.status(500).json({
									error: err
								});
							});
					}
				});
			}
		})
};

// Log in a user.
exports.loginUser = function(req, res, next)
{
	User.find({email: req.body.email})
		.exec()
		.then(users => {

			// If user is not found
			if (users.length < 1) {
				return res.status(404).json({
					message: "Authentication Failed."
				});
			} else {
				bcrypt.compare(req.body.password, users[0].password, function(err, data) {
					if (err) {
						return res.status(401).json({
							message: "Authentication Failed"
						});
					}

					if (data) {
						const token = jwt.sign({
							email: users[0].email,
							userID: users[0]._id,
							role: users[0].role,
							isAdmin: users[0].isAdmin
						}, process.env.JWT_KEY,
								 {
									 expiresIn: "1h"
								 }
								);
						
						return res.status(200).json({
							message: "Authentication Successful",
							token: token
						});
					}
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
};

exports.getProfile = function(req, res, next)
{
	
}

exports.updateProfile = function(req, res, next)
{

}
