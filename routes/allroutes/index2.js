const router = require("express").Router();
const articlesRoutes = require("./articles");

// Book routes
router.use("/api", articlesRoutes);

module.exports = router;
