// routes/contactRoutes.js

const express = require('express');
const { submitContactForm } = require('../controllers/getemailController');
const router = express.Router();

// API endpoint for handling contact form submissions
router.post('/submit', submitContactForm)

module.exports = router;
