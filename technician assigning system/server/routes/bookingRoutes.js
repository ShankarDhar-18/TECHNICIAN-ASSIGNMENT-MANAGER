const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// ✅ POST /api/bookings - Save a new technician booking
router.post('/', async (req, res) => {
  try {
    const { name, technicianType, location } = req.body;

    if (!name || !technicianType || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({ name, technicianType, location });
    await newBooking.save();

    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ GET /api/bookings - Get all bookings (for admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
