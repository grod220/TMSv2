const express = require('express');
const router = express.Router();

// Facebook verification
router.get('/webhook', (req, res) => {
  if(req.query['hub.verify_token'] === process.env.FBTOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('No sir.')
  }
});

// Handle incoming FB webhook verification
router.post('/webhook', (req, res) => {
  console.log(req.body);
  console.log(req.body.entry[0].changes);

  // Send get request to FB for permalink

  // Left to do: send to Firebase

  // Setup front end to pull that ID from Firebase

  res.send('Yep, got it!')
});

module.exports = router;
