const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

// Route to schedule an appointment
router.post('/schedule_service', controller.scheduleService);

// Route to handle request quote email
router.post('/request_quote', controller.requestQuote);

module.exports = router;
