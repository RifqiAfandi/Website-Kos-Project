const { Kos_Premiums } = require("../models");
const imagekit = require("../lib/imagekit");

async function getAllKosPremium(req, res) {
  try {
    const premium = await Kos_Premiums.findAll();

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
    const premium = await Kos_Premiums.findOne({
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

async function createKosPremium(req, res) {
  try {
    if (req.file) {
      const file = req.file;
      const split = file.originalname.split(".");
      const ext = split[split.length - 1];
      const { name, gender, description, phone_number, city, price } =
        req.body;

      const updloadImg = await imagekit.upload({
        file: file.bufefer,
        fileName: `${split[0]}-${Date.now()}.${ext}`,
      });
      if (!updloadImg) {
        return res.status(500).json({
          status: "Failed",
          message: "Failed to upload image",
          isSuccess: false,
          data: null,
        });
      } else if (updloadImg) {
        const newPremium = await Kos_Premiums.create({
          name,
          gender,
          description,
          phone_number,
          city,
          price,
          kosImg: updloadImg.url,
        });

        res.status(201).json({
          status: "Success",
          message: "Success create kos premium",
          isSuccess: true,
          data: {
            newPremium,
          },
        });
      } else {
        const newPremium = await Kos_Premiums.create({
          name,
          gender,
          description,
          phone_number,
          city,
          price,
        });
        res.status(201).json({
          status: "Success",
          message: "Success create kos premium",
          isSuccess: true,
          data: {
            newPremium,
          },
        });
      }
    }
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
  getAllKosPremium,
  getKosPremiumById,
  createKosPremium,
};
