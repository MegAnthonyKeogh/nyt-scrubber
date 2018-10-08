
const router = require("express").Router();
const controller = require("../../controllers/articleController")



router.route('/articles')
.get(controller.findAll)
.post((req,res) => {
  console.log("IN MEGs POST")
  controller.create(req,res)
})


router.route("/article/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete((req, res) => {
    console.log("In route delete")
    controller.remove(req, res)
  })
  

////
module.exports = router;
