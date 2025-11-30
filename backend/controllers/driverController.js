const Driver = require("../models/Driver");

// CREATE DRIVER
exports.createDriver = async (req, res) => {
  try {
    const { name, phone, licenseNumber, vehicleModel, vehicleNumber } = req.body;

    if (!name || !phone || !licenseNumber || !vehicleModel || !vehicleNumber) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const driver = await Driver.create({
      name,
      phone,
      licenseNumber,
      vehicleModel,
      vehicleNumber
    });

    return res.status(201).json({
      message: "Driver added successfully!",
      driver
    });
  } catch (error) {
    console.error("Driver Create Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET ALL DRIVERS
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    return res.status(200).json(drivers);
  } catch (error) {
    console.error("Get Drivers Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
