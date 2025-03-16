const { Kos_Mahasiswa } = require("../models");
const { Kos_Pegawai } = require("../models");
const { Kos_Premium } = require("../models");

async function getAllKosMahasiswa(req, res) {
  try {
    const mahasiswa = await Kos_Mahasiswa.findAll();

    if (mahasiswa.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data kos mahasiswa found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get kos mahasiswa data",
      isSuccess: true,
      data: {
        mahasiswa,
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

module.exports = {
  getAllKosMahasiswa,
  getAllKosPegawai,
  getAllKosPremium,
};
