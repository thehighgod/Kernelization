// backend/routes/users.js - User Routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express = require('express');
const router  = express.Router()

router.get("/users", function() => {
	res.send("Under construction.");
});

router.get("/users/:userid", function() => {
	res.send("Under construction.");
});

module.exports = router
