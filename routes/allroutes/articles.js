const express = require('express');
const axios = require("axios");
const router = require("express").Router();
const app = express();
const controller = require("../../controllers/articleController")

app.get('/', (req, res) => {
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

router.route('/')
.get(controller.findAll)
.post(controller.create)


router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

////
module.exports = router;
