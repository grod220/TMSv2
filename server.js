const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const compression = require('compression');
var enforce = require('express-sslify');

const app = express();
app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.use(compression());

require('dotenv').config()

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
const api = require('./server/routes/api');
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(chalk.blue(`Meatballs listening on port ${port}! ♪♩♫♯♭`));
});
