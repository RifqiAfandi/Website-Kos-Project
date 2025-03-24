const router = require("express").Router();

const Auth = require("./authRoute");
const Kos_Mahasiswa = require("./kosMahasiswaRoute");
const Kos_Pegawai = require("./kosPegawaiRoute");
const Kos_Premium = require("./kosPremiumRoute");
const Cities = require("./citiesRoute");
const News = require("./newsRoute");
const systemController = require("../controllers/systemController");

router.use("/auth", Auth);
router.use("/kos-mahasiswa", Kos_Mahasiswa);
router.use("/kos-pegawai", Kos_Pegawai);
router.use("/kos-premium", Kos_Premium);
router.use("/cities", Cities);
router.use("/news", News);

router.use("/health-check", systemController.healthCheck);
router.use(systemController.onLost);
router.use(systemController.onError);

module.exports = router;
