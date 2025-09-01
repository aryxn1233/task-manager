const express = require('express');
const router = express.Router();
const { register, login, saveFcmToken } = require('../controllers/auth');
const { protect } = require('../middleware/auth'); // <-- destructure protect

// Auth routes
router.post('/register', register);
router.post('/login', login);

// Save FCM token (protected route)
router.post('/save-fcm-token', protect, saveFcmToken);

module.exports = router;
