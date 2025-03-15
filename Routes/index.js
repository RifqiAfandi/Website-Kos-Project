const router = require("express").Router();

const Kos_Mahasiswa = require("./kosMahasiswaRoute");
const Kos_Pegawai = require("./kosPegawaiRoute");
const Kos_Premium = require("./kosPremiumRoute");
const Cities = require("./citiesRoute");
const News = require("./newsRoute");

router.use("/kos-mahasiswa", Kos_Mahasiswa);
router.use("/kos-pegawai", Kos_Pegawai);
router.use("/kos-premium", Kos_Premium);
router.use("/cities", Cities);
router.use("/news", News);

router.use("/health-check");

module.exports = router;
