// backend/controllers/rideController.js
const Ride = require("../models/Ride");
const Driver = require("../models/Driver"); // optional, used for validation/populate

// CREATE A RIDE
exports.createRide = async (req, res) => {
  try {
    const { driver, startLocation, endLocation, date, time, availableSeats, price } = req.body;

    // Basic validation
    if (!driver || !startLocation || !endLocation || !date || !time || !availableSeats || !price) {
      return res.status(400).json({ message: "All ride fields are required" });
    }

    // Optional: ensure driver exists (helps avoid invalid ObjectId references)
    const foundDriver = await Driver.findById(driver);
    if (!foundDriver) {
      return res.status(400).json({ message: "Driver not found" });
    }

    const ride = new Ride({
      driver,
      startLocation,
      endLocation,
      date,
      time,
      availableSeats,
      price
    });

    await ride.save();

    res.status(201).json({
      message: "Ride created successfully!",
      ride
    });
  } catch (error) {
    console.error("Create Ride Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET ALL RIDES (with driver summary)
exports.getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find().populate("driver", "name phone vehicleModel vehicleNumber");
    return res.status(200).json(rides);
  } catch (error) {
    console.error("Get Rides Error:", error);
    return res.status(500).json({ message: "Error fetching rides" });
  }
};

// GET RIDE BY ID
exports.getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id).populate("driver", "name phone vehicleModel vehicleNumber");
    if (!ride) return res.status(404).json({ message: "Ride not found" });
    return res.status(200).json(ride);
  } catch (error) {
    console.error("Get Ride Error:", error);
    return res.status(400).json({ message: "Invalid ride ID" });
  }
};

// UPDATE RIDE (basic)
exports.updateRide = async (req, res) => {
  try {
    const updatedRide = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRide) return res.status(404).json({ message: "Ride not found" });
    return res.status(200).json(updatedRide);
  } catch (error) {
    console.error("Update Ride Error:", error);
    return res.status(400).json({ message: "Update failed" });
  }
};

// DELETE RIDE
exports.deleteRide = async (req, res) => {
  try {
    const deleted = await Ride.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Ride not found" });
    return res.status(200).json({ message: "Ride deleted" });
  } catch (error) {
    console.error("Delete Ride Error:", error);
    return res.status(400).json({ message: "Delete failed" });
  }
};
