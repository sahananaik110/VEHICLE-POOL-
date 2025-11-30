const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "driver", "admin"],
      default: "user",
    },

    // DRIVER FIELDS
    vehicleNumber: {
      type: String,
      default: null,
    },

    vehicleModel: {
      type: String,
      default: null,
    },

    licensePhoto: {
      type: String, // path or URL
      default: null,
    },

    isDriverVerified: {
      type: Boolean,
      default: false,
    },

    // GENERAL KYC
    kycDocument: {
      type: String,
      default: null,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
