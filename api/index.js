require("dotenv").config();
const app = require("../index");

// Export a serverless function handler compatible with Vercel
module.exports = app;
