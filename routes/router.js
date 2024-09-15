
const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointmentModel');
//const nodemailer = require('nodemailer');

//TODO: Set up nodemailer transport

// Route to schedule an appointment
router.post('/schedule_service', async (req, res) => {
  const { name, email, phone, date } = req.body;

  try {
    const newAppointment = new Appointment({ name, email, phone, date });
    await newAppointment.save();

    //TODO: Set up confirmation email message and send to customer

    res.status(201).json({ message: 'Appointment scheduled successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to schedule appointment' });
  }
});

// TODO: Route to handle request quote email
// router.post('/request_quote', (req, res) => {
//   const { name, email, service, message } = req.body;

// });

module.exports = router;
