const { Kos_Mahasiswas } = require("../models");

async function getAllKosMahasiswa(req, res) {
  try {
    const mahasiswa = await Kos_Mahasiswas.findAll();

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

async function getKosMahasiswaById(req, res) {
  try {
    const id = req.params.id;
    const mahasiswa = await Kos_Mahasiswas.findOne({
      where: { id },
    });

    if (!mahasiswa) {
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
        message: "An unexpected error occurred",
        isSuccess: false,
        data: null,
      });
    }
  }
}

module.exports = {
  getAllKosMahasiswa,
  getKosMahasiswaById,
};
