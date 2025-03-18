const router = require("express").Router();

const citiesController = require("../controllers/citiesController");

router.get("/", citiesController.getAllCities);

module.exports = router;
