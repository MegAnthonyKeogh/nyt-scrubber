const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controller = require("./controllers/articleController");

const apiRoutes = require("./routes/allroutes");
const axios = require("axios");
 const BaseURL = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?";
 const APIKEY = "api-key=525c9a845bc640ce902b3c5472346aaa";
 const query = "&q=";
 const begin_date = "&begin_date=";
 const end_date = "&end_date=";

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
 }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/nyt/articles', (req, res) => {
  console.log("in the api route");
  console.log(typeof req.body.startyear)
  let url = `${BaseURL}${APIKEY}${query}${req.body.query}`;
  url = req.body.startyear !== "" ? `${url}${begin_date}${req.body.startyear}`
                                  : url;
  url = req.body.endyear !== "" ? `${url}${end_date}${req.body.endyear}`
                                : url;                                  
                                  
  console.log(url)
  axios.get(url)  
  .then(response => {
      console.log("in .then of nytimes call");
      //console.log(response.data.response.docs)
      res.send(response.data.response.docs)
  })
  .catch(err => {
      console.log("in .catch of nytimes call");
      console.log(err)
      res.status(422).json(err)
    })
    
  });

app.use(apiRoutes);

mongoose.connect("mongodb://admin:password1@ds039017.mlab.com:39017/heroku_05qbs503" ||"mongodb://localhost/nytscrubandsave");

app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;
