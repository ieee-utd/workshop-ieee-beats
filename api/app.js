/** This file is the entrance to the NodeJS server
    Run it with "node app.js"
 **/


/** HELLO, WORLD **/
console.log("======================================================");
console.log("IEEE Beatz API Server")

/** EXPRESS JS **/
const express = require('express');
var app = express();
var router = express.Router;

//Set application port
app.set('port', process.env.PORT || 5000);

//All the API calls go into routes/index.js
app.use('/api/', require('./routes/index.js'));

//If we couldn't find the endpoint, we send a 404
app.use(function (req, res, next) {
  res.status(404).json({ message: "Error 404: We couldn't find that endpoint" })
});

//Start server on a port
app.listen(app.get('port'), function() {
  console.log("App is running on localhost:" + app.get('port'));
});
module.exports = app;
