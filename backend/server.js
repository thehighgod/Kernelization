const express    = require('express');
const bodyParser = require('body-parser');
const fs         = require('fs');
const path       = require('path');
const app        = express();
const router     = express.Router();

app.set('port', (process.env.port || 3000));
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

// Logic for API requests.

// GET Request
app.get('/api/', (req, res) => {
    res.end();
});

/*
app.get('/api/entities', (req, res) => {
    fs.readFile(API_PATH, (err, data) => {
        res.setHeader('Cache-Control', 'no-cache');

        if (data) {
            res.json(JSON.parse(data));
        }

        res.end();
    })
});

// POST Request
app.post('/api/entities', (req, res) => {
    fs.readFile(API_PATH, (err, data) => {
        const entities = JSON.parse(data);
        const newEntity = {
            id: req.body.id,
            title: req.body.title,
            attributes: req.body.attrs,
        };

        entities.push(newEntity);
        fs.writeFile(API_PATH, JSON.stringify(entities, null, 4), () => {
            res.setHeader('Cache-Control', 'no-cache');
            res.json(entities);
        });
    });
});

// PUT request
app.put('/api/entities', (req, res) => {
    fs.readFile(API_PATH, (err, data) => {
        const entities = JSON.parse(data);
        entities.forEach((ent) => {
            if (ent.id === req.body.id) {
                ent.title = req.body.title;
                ent.attributes = req.body.attrs;
            }
        });

        fs.writeFile(API_PATH, JSON.stringify(entities, null, 4), () => {
            res.json({});
        });
    });
});

// DELETE request
app.delete('/api/entities', (req, res) => {
    fs.readFile(API_PATH, (err, data) => {
        let entities = JSON.parse(data);
        entities = entities.reduce((dummy, entity) => {
            if (entity.id === req.body.id) {
                return dummy;
            } else {
                return dummy.concat(entity);
            }
        }, []);

        fs.writeFile(API_PATH, JSON.stringify(entities, null, 4), () => {
            res.json({});
        });
    });
});

app.listen(app.get('port'), function() {
    console.log(`App started on port ${app.get('port')}`);
});
*/
