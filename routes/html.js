const express = require('express');
const htmlroutes = require("express").Router()
const app = express();

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });

  module.exports = htmlroutes;