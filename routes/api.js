const router = require("express").Router();
const apiController = require("../controllers/apiController");
// const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

// router api landing page
router.get("/landing-page", apiController.landingPage);
// router api item detail
router.get("/detail-page/:id", apiController.detailPage);
module.exports = router;
