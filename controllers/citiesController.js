const { Cities } = require("../models");

async function getAllCities(req, res) {
  try {
    const city = await Cities.findAll();

    if (city.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cities found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get cites data",
      isSuccess: true,
      data: {
        city,
      },
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: error.message,
        isSuccess: false,
        data: null,
      });
    }
  }
}

module.exports = {
  getAllCities,
};
