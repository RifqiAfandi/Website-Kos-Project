const router = require("express").Router();

const kosPremiumController = require("../controllers/kosPremiumController");

router.get("/", kosPremiumController.getAllKosPremium);
router.get("/:id", kosPremiumController.getKosPremiumById);

module.exports = router;
