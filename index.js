require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const expressEjsLayout = require("express-ejs-layouts");
const cors = require("cors");

const router = require("./routes");
const { systemController } = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(expressEjsLayout);
app.set("layaout", "layout");

app.get("/api/v1/health-check", systemController.healthCheck);
app.use("/api/v1", router);
app.use(systemController.onLost);

module.exports = app;
