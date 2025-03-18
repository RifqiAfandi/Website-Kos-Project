const router = require("express").Router();

const kosPegawaiController = require("../controllers/kosPegawaiController");

router.get("/", kosPegawaiController.getAllKosPegawai);
router.get("/:id", kosPegawaiController.getKosPegawaiById);

module.exports = router;
