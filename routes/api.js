const express = require('express');
const axios = require("axios");
const router = require("express").Router();
const app = express();



const BaseURL = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=525c9a845bc640ce902b3c5472346aaa&q=";
const query = "school";



app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

app.get('/api', (req, res) => {
    console.log("in the api function");
    axios.get(BaseURL + APIKEY + query)
      .then(({data: { results }}) => res.json(results))
      .catch(err => res.status(422).json(err))
    
})

////
module.exports = router;
