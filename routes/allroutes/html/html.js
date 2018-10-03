
const express = require('express');
const axios = require("axios");
const router = require("express").Router();
const app = express();
const controller = require("../../controllers/articleController")

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });