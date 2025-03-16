const { Kos_Premium } = require("../models");

async function getAllKosPremium(req, res) {
  try {
    const premium = await Kos_Premium.findAll();

    if (premium.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data kos premium found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get kos premium data",
      isSuccess: true,
      data: {
        premium,
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

async function getKosPremiumById(req, res) {
  try {
    const id = req.params.id;
    const premium = await Kos_Premium.findOne({
      where: { id },
    });

    if (!premium) {
      return res.status(404).json({
        status: "Failed",
        message: "No data kos premium found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get kos premium data",
      isSuccess: true,
      data: {
        premium,
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
        message: "An unexpected error occurred",
        isSuccess: false,
        data: null,
      });
    }
  }
}

module.exports = {
  getAllKosPremium,
  getKosPremiumById,
};
