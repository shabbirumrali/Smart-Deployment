const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController')

// register Route
router.post('/', registerUser)

// login Route
router.post('/login', loginUser)

// Protecting route
const { protect } = require('../middleware/authMiddleware')
// get User Info Route
router.get('/me', protect, getMe)

module.exports = router