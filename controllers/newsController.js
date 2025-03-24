const { News } = require("../models");

async function getAllNews(req, res) {
  try {
    const news = await News.findAll();

    if (news.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data news found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get news data",
      isSuccess: true,
      data: {
        news,
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
  getAllNews,
};
