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

    isVerified: {
      type: Boolean,
      default: false, // after admin approves KYC
    },

    kycDocument: {
      type: String, // file path or URL
      default: null,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
