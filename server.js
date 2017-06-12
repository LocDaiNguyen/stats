// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const compression = require('compression');

// Get API routes
const players = require('./server/routes/players');
const leaders = require('./server/routes/leaders');
const points = require('./server/routes/points');
const goals = require('./server/routes/goals');
const assists = require('./server/routes/assists');
const plusminuss = require('./server/routes/plus-minuss');
const gaas = require('./server/routes/gaas');
const svs = require('./server/routes/svs');
const wins = require('./server/routes/wins');
const sos = require('./server/routes/sos');

const app = express();
mongoose.connect('localhost:27017/db_name_here');

// Parse for POST data
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(compression());
// app.use(expressValidator());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'src')));

// Set API routes
app.use('/api/players', players);
app.use('/api/leaders', leaders);
app.use('/api/points', points);
app.use('/api/goals', goals);
app.use('/api/assists', assists);
app.use('/api/plusminuss', plusminuss);
app.use('/api/gaas', gaas);
app.use('/api/svs', svs);
app.use('/api/wins', wins);
app.use('/api/sos', sos);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

// Get port from environment and store in express
const port = process.env.PORT || '8080';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provide port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));
