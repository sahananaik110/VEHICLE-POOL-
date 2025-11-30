const express = require("express");
const router = express.Router();
const { createDriver, getDrivers } = require("../controllers/driverController");

// ADD DRIVER
router.post("/create", createDriver);

// GET ALL DRIVERS
router.get("/list", getDrivers);

module.exports = router;
