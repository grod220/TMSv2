const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Facebook verification
app.get('/api/webhook', (req, res) => {
  if(req.query['hub.verify_token'] === process.env.FBTOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('No sir.')
  }
});
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
