require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const expressEjsLayout = require("express-ejs-layouts");
const cors = require("cors");

const router = require("./Routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(expressEjsLayout);
app.set("layaout", "layout");

app.use("/api", router);

module.exports = app;
