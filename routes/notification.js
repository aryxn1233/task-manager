const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Load Firebase service account key
const serviceAccount = require("../firebase-service-account.json"); // adjust the path if needed

// Import User model and JWT protect middleware
const User = require("../models/User");
const { protect } = require("../middleware/auth");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Save token API
// Use auth middleware to ensure only logged-in users save tokens
router.post("/save-token", protect, async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: "FCM token required" });
  }
  try {
    // Save the token to the user's document (avoid duplicates)
    await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { fcmTokens: token } },
      { new: true }
    );
    res.status(200).json({ message: "Token saved" });
  } catch (error) {
    console.error("Error saving token:", error);
    res.status(500).json({ error: "Failed to save token" });
  }
});

// Send notification API
router.post("/send", protect, async (req, res) => {
  const { title, body } = req.body;
  try {
    // Retrieve all tokens from the current user (could go wider, all users, etc)
    const user = await User.findById(req.user._id);
    if (!user || !user.fcmTokens || user.fcmTokens.length === 0) {
      return res.status(400).json({ error: "No tokens found for user" });
    }
    // Send notification to all stored tokens for this user
    const message = {
      notification: { title, body },
      tokens: user.fcmTokens,
    };
    const response = await admin.messaging().sendMulticast(message);
    res.status(200).json({ message: "Notification sent", successCount: response.successCount });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send notification" });
  }
});

module.exports = router;
