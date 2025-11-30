require("dotenv").config();   // <-- ADD THIS FIRST

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/driver", require("./routes/driverRoutes"));
app.use("/api/driver", require("./routes/driverRoutes"));
app.use("/api/rides", require("./routes/rideRoutes"));
app.use("/api/rides", require("./routes/rideRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

// test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
