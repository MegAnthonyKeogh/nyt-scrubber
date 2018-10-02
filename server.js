const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controller = require("./controllers/articleController");

const apiRoutes = require("./routes/api");
const htmlroutes = require("./routes/html");
const axios = require("axios");
const BaseURL = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=525c9a845bc640ce902b3c5472346aaa&q=";
const query = "school";




const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/nyt', (req, res) => {
  console.log("in the api route");
  axios.get("https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=525c9a845bc640ce902b3c5472346aaa&q=school")
  .then(response => {
      console.log("in .then of nytimes call");
      res.send(response.data.response.docs)
  })
  .catch(err => {
      console.log("in .catch of nytimes call");
      console.log(err)
      res.status(422).json(err)
  })
});

app.get('/api/articles', (req, res) => {
get(controller.findAll)
console.log("in find all articles")
})




  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });


  
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;