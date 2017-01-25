const express = require('express');
const rp = require('request-promise');
const router = express.Router();


// Facebook verification
router.get('/webhook', (req, res) => {
  if(req.query['hub.verify_token'] === process.env.FBTOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('No sir.')
  }
});

router.get('/fbtest', (req, res) => {
  let options = {
    uri: `https://graph.facebook.com/v2.8/790534394301792/feed?fields=permalink_url&access_token=${process.env.APPID}|${process.env.APPSECRET}`,
    json: true // Automatically parses the JSON string in the response
  };

  rp(options)
      .then(function (response) {
        let mostRecentPostURL = response.data[0].permalink_url;
        res.send(mostRecentPostURL)
        // send to Database
      })
      .catch(function (err) {
        res.send(err)
          console.log(err.body);
      });
});

// Handle incoming FB webhook verification
router.post('/webhook', (req, res) => {
  console.log(req.body);
  console.log(req.body.entry[0].changes);
  console.log('**************************');

  // Send get request to FB for permalink

  // Left to do: send to Firebase

  // Setup front end to pull that ID from Firebase

  res.send('Yep, got it!')
});

module.exports = router;
