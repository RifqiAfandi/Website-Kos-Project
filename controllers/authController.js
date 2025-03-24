const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();

const { Users } = require("../models");

async function register(req, res) {
  try {
    const { email, password, name, phone, profileImg } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const checkUser = await Users.findOne({
      where: { email },
    });
    if (checkUser) {
      return res.status(400).json({
        status: "Failed",
        message: "Email already registered",
        isSuccess: false,
        data: null,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid email",
        isSuccess: false,
        data: null,
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        status: "Failed",
        message: "Password must be at least 6 characters",
        isSuccess: false,
        data: null,
      });
    }

    const newUser = await Users.create({
      email,
      password: hashedPassword,
      name,
      phone,
      profileImg,
    });

    res.status(201).json({
      status: "Success",
      message: "User created",
      isSuccess: true,
      data: {
        user: newUser,
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

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid email",
        isSuccess: false,
        data: null,
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        status: "Failed",
        message: "Password must be at least 6 characters",
        isSuccess: false,
        data: null,
      });
    }

    const userLogin = await Users.findOne({
      where: { email },
    });
    if (!userLogin) {
      return res.status(404).json({
        status: "Failed",
        message: "Email not registered",
        isSuccess: false,
        data: null,
      });
    }

    const hashedPassword = userLogin.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      return res.status(400).json({
        status: "Failed",
        message: "Invalid password",
        isSuccess: false,
        data: null,
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Login success",
      isSuccess: true,
      data: {
        user: userLogin,
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
        message: error.message,
        isSuccess: false,
        data: null,
      });
    }
  }
}

async function logout(req, res) {
  req.session.destroy();
  res.redirect("/login");
}

module.exports = { register, login, logout };
