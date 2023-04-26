const express = require ("express");
const mainRouter = express.Router();

const mainController = require ("../controller/mainController.js")

mainRouter("/", mainController.main )

module.exports = mainRouter