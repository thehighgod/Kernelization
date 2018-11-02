// backend/server.js - Server
// Copywrite (C) 2018, Brett Broadhurst
//

const express    = require('express');
const bodyParser = require('body-parser');
const fs         = require('fs');
const path       = require('path');
const mongoose   = require('mongoose');
const morgan     = require('morgan');

// Routes
const boxRoutes  = require('./routes/box');
const userRoutes = require('./routes/users');

const app        = express();

const db_info = {
	host: "localhost",
	user: "",
	pass: "",
	name: "kernelization"
};

mongoose.connect(`mongodb://${db_info.host}/${db_info.name}`, {useNewUrlParser: true});

// App settings
app.set('port', (process.env.PORT || 3001));
app.use(express.static("uploads"));
app.use(express.static(path.join(__dirname, "frontend", "public", "static")));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Make sure that nothing gets cached and CORS errors are eliminated.
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested, Content-Type, Accept, Authorization");
	res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.setHeader('Pragma', 'no-cache');
	res.setHeader('Expires', '0');

	if (res.method === "Options") {
		res.header('Access-Control-Allow-Methods', "PUT, POST, GET, PATCH, DELETE");
		return res.status(200).json({});
	}
	
	next();
});

// API Homepage
app.get('/api/v1/', function(req, res, next) {
	res.send("Kernelization API V1");
    res.end();
});

app.use('/api/v1/boxes/', boxRoutes);
app.use('/api/v1/users/', userRoutes);

// Error handling.
app.use(function(req, res, next) {
	const error = new Error("Not found.");
	error.status = 404;
	next(error);
});

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

app.listen(app.get('port'), function() {
    console.log(`App started on port ${app.get('port')}`);
	console.log(process.env.JWT_KEY);
});
