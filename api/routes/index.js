/** This file contains all of the API calls **/

//ExpressJS allows us to create REST APIs easily
const express = require('express');
//Here's the ExpressJS router
const router = express.Router();
//This is required to read the filesystem
const fs = require('fs');

/** A test request!
    GET /api
**/
router.get('/', (req, res) => {
  //Send some witty plaintext
  res.send("Welcome to the IEEE Beatz API! If you're seeing this, NodeJS is working. :)");
});

module.exports = router;
