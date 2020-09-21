const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

// router atau endpoint untuk view ke mana saja
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);

// router atau endpoint untuk menambah data
router.post("/category", adminController.addCategory);
router.post("/bank", uploadSingle, adminController.addBank);
router.post("/item", uploadMultiple, adminController.addItem);

// router atau endpoint untuk mengedit data
router.put("/category", adminController.editCategory);
router.put("/bank", uploadSingle, adminController.editBank);
router.put("/item/:id", uploadMultiple, adminController.editItem);

// router atau endpoint untuk menghapus data
router.delete("/category/:id", adminController.deleteCategory);
router.delete("/bank/:id", adminController.deleteBank);
router.delete("/item/:id/delete", adminController.deleteItem);

module.exports = router;
