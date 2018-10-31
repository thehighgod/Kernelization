const express    = require('express');
const bodyParser = require('body-parser');
const fs         = require('fs');
const path       = require('path');
const app        = express();
const router     = express.Router();

app.set('port', (process.env.port || 3001));
app.use(express.static(path.join(__dirname, "frontend", "public", "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Make sure that nothing gets cached and fucks up development.
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// GET Request
app.get('/api/v1/', (req, res) => {
    res.end();
});

app.listen(app.get('port'), function() {
    console.log(`App started on port ${app.get('port')}`);
});
