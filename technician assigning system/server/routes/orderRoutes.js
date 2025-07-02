const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Save new order
router.post('/', async (req, res) => {
  try {
    const { items, total, user, address, phone, wp } = req.body;

    // 🛑 Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Order items are required' });
    }
    if (!total || !user || !address || !phone) {
      return res.status(400).json({ error: 'Missing required order details' });
    }

    // ✅ Create and save order
    const newOrder = new Order({
      items,
      total,
      user,
      address,
      phone,
      wp,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);

  } catch (err) {
    console.error('❌ Order save error:', err.message);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// Get all orders (for admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error('❌ Fetch order error:', err.message);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
