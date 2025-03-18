const router = require("express").Router();

const kosMahasiswaController = require("../controllers/kosMahasiswaController");

router.get("/", kosMahasiswaController.getAllKosMahasiswa);
router.get("/:id", kosMahasiswaController.getKosMahasiswaById);

module.exports = router;
