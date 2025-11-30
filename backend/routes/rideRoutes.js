const express = require("express");
const router = express.Router();

const { createRide, getAllRides } = require("../controllers/rideController");

router.post("/create", createRide);
router.get("/all", getAllRides);

module.exports = router;
