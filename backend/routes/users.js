// backend/routes/users.js - User Routes
// Copywrite (C) 2018, Brett Broadhurst
//

const bcrypt   = require('bcrypt');
const express  = require('express');
const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const router   = express.Router()
const User     = require('../models/user');

// All users GET
router.get("/", function(req, res, next) {
	res.status(200).json({
		message: "Under construction."
	});
});

// Register Route
router.post("/register", function(req, res, next) {

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
});

// Login Route
router.post("/login", function(req, res, next) {
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
							userID: users[0]._id 
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
});

// Specific user GET
router.get("/:userId", function(req, res, next) {
	res.send("Under construction.");
});

// Specific user PUT
router.put("/:userId", function(req, res, next) {
	res.status(200).json({
		message: "Handling PUT request."
	});
});

// Specific user DELETE
router.delete("/:userId", function(req, res, next) {
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
	
});

module.exports = router
