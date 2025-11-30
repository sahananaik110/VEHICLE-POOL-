const express = require("express");
const router = express.Router();

const { bookRide, getBookingsByUser } = require("../controllers/bookingController");

// ----------------------------------------------------
// EXISTING ROUTE (already in your file)
// ----------------------------------------------------
router.post("/book", bookRide);

// ----------------------------------------------------
// ⭐ ADDED THIS ROUTE (THIS IS NEW)
// ----------------------------------------------------
router.get("/user/:id", getBookingsByUser);
// ↑↑↑ THIS IS THE EXACT NEW LINE YOU MUST ADD

module.exports = router;
