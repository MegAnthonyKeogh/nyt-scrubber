const express = require('express');
const axios = require("axios");
const router = require("express").Router();
const app = express();
const controller = require("../../controllers/articleController")



router.route('/articles')
.get(controller.findAll)
.post(controller.create)


router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove)
  

////
module.exports = router;
