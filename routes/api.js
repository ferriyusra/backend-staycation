const router = require("express").Router();
const apiController = require("../controllers/apiController");
// const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

// menggunakan middlewares auth untuk session login
router.get("/landing-page", apiController.landingPage);

module.exports = router;
