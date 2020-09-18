const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { upload } = require("../middlewares/multer");

// router atau endpoint untuk view ke mana saja
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

// router atau endpoint untuk menambah data
router.post("/category", adminController.addCategory);
router.post("/bank", upload, adminController.addBank);

// router atau endpoint untuk mengedit data
router.put("/category", adminController.editCategory);
router.put("/bank", upload, adminController.editBank);

// router atau endpoint untuk menghapus data
router.delete("/category/:id", adminController.deleteCategory);
router.delete("/bank/:id", adminController.deleteBank);

module.exports = router;
