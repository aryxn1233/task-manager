const express = require('express');
const router = express.Router();
const { register, login, saveFcmToken } = require('../controllers/auth');
const authMiddleware = require('../middleware/authMiddleware'); 

// Auth routes
router.post('/register', register);
router.post('/login', login);

// Save FCM token (protected route)
router.post('/save-fcm-token', authMiddleware, saveFcmToken);

module.exports = router;
