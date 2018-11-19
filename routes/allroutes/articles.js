
const router = require("express").Router();
const controller = require("../../controllers/articleController")



router.route('/articles')
//console.log('in the router route get function')
.get(controller.findAll)
.post((req,res) => {
  
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
