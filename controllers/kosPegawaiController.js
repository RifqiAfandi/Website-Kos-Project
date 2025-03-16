const { Kos_Pegawai } = require("../models");

async function getAllKosPegawai(req, res) {
  try {
    const pegawai = await Kos_Pegawai.findAll();

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
    const pegawai = await Kos_Pegawai.findOne({
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

module.exports = {
  getAllKosPegawai,
  getKosPegawaiById,
};
