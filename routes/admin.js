const router = require("express").Router();

const adminController = require("../controllers/adminController");

// router untuk view ke mana saja
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

// router untuk menambah data
router.post("/category", adminController.addCategory);

// router untuk mengedit data
router.put("/category", adminController.editCategory);

// router untuk menghapus data
router.delete("/category/:id", adminController.deleteCategory);

module.exports = router;
