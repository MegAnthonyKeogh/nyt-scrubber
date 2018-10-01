const express = require('express');
const app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));




app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

  