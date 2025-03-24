const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/", authController.register);
router.post("/", authController.login);

module.exports = router;
