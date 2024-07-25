const User = require("../models/user");
const Inquiry = require("../models/inquiry");

// Controller for user registration
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      number,
      userClass,
      city,
      pincode,
      lastClassPercentage,
      address,
    } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const newUser = new User({
      name,
      email,
      number,
      class: userClass,
      city,
      pincode,
      lastClassPercentage,
      address,
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Controller for inquiries
const createInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newInquiry = new Inquiry({
      name,
      email,
      message,
    });

    await newInquiry.save();
    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: newInquiry,
    });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  registerUser,
  createInquiry,
};
