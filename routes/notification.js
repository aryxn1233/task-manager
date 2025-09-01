const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Load Firebase service account key (download JSON from Firebase)
const serviceAccount = require("/etc/secrets/firebase-service-account.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Save token API
router.post("/save-token", async (req, res) => {
  const { token } = req.body;
  // TODO: save token to DB mapped to userId
  res.status(200).json({ message: "Token saved" });
});

// Send notification API
router.post("/send", async (req, res) => {
  const { token, title, body } = req.body;
  try {
    await admin.messaging().send({
      token,
      notification: { title, body },
    });
    res.status(200).json({ message: "Notification sent" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send notification" });
  }
});

module.exports = router;
