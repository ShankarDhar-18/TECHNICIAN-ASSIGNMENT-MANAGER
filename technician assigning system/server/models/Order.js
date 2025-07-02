const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [String],
  total: Number,
  user: String,       // 🧍 Name of user
  address: String,
  phone: String,
  wp: String,
  mode: String,       // <- Make sure this field exists if you're sending it
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
