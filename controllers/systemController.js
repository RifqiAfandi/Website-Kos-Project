const healthCheck = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Application passed health check",
      isSuccess: true,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Application failed pass health check",
      isSuccess: false,
    });
  }
};

function onLost(req, res, next) {
  res.status(404).json({
    status: "Failed",
    message: "API not found",
    isSuccess: false,
  });
  next;
}

function onError(err, req, res, next) {
  res.status(500).json({
    status: "Failed",
    message: err.message,
    isSuccess: false,
  });
  next;
}

module.exports = {
  healthCheck,
  onError,
  onLost,
};
