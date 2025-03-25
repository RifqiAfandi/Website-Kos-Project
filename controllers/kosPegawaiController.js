const { Kos_Pegawais } = require("../models");
const imagekit = require("../lib/imagekit");

async function getAllKosPegawai(req, res) {
  try {
    const pegawai = await Kos_Pegawais.findAll();

    if (pegawai.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data kos pegawai found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get kos pegawai data",
      isSuccess: true,
      data: {
        pegawai,
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

async function getKosPegawaiById(req, res) {
  try {
    const id = req.params.id;
    const pegawai = await Kos_Pegawais.findOne({
      where: { id },
    });

    if (!pegawai) {
      return res.status(404).json({
        status: "Failed",
        message: "No data kos pegawai found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get kos pegawai data",
      isSuccess: true,
      data: {
        pegawai,
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

async function createKosPegawai(req, res) {
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
        const newPegawai = await Kos_Pegawais.create({
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
          message: "Success create kos pegawai",
          isSuccess: true,
          data: {
            newPegawai,
          },
        });
      } else {
        const newPegawai = await Kos_Pegawais.create({
          name,
          gender,
          description,
          phone_number,
          city,
          price,
        });
        res.status(201).json({
          status: "Success",
          message: "Success create kos pegawai",
          isSuccess: true,
          data: {
            newPegawai,
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
  getAllKosPegawai,
  getKosPegawaiById,
  createKosPegawai,
};
