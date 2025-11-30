const Booking = require("../models/Booking");
const Ride = require("../models/Ride");

// ----------------------------------------------------
// EXISTING FUNCTION (you already had this)
// ----------------------------------------------------
exports.bookRide = async (req, res) => {
  try {
    // your booking logic here
  } catch (error) {
    console.error("Booking Error:", error);
    return res.status(500).json({ message: "Error booking ride" });
  }
};

// ----------------------------------------------------
// ⭐ ADDED THIS NEW FUNCTION
// THIS IS WHAT ALLOWS YOU TO GET USER BOOKINGS
// ----------------------------------------------------
exports.getBookingsByUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get user ID from URL

    // Find bookings for that user
    const bookings = await Booking.find({ user: userId })
      .populate("ride")                // get ride details
      .populate("user", "name email"); // get user details (only name + email)

    // No bookings?
    if (!bookings.length) {
      return res.status(404).json({ message: "No bookings found" });
    }

    // Send the result
    return res.status(200).json(bookings);

  } catch (error) {
    console.error("Get Bookings Error:", error);
    return res.status(500).json({ message: "Error fetching bookings" });
  }
};
