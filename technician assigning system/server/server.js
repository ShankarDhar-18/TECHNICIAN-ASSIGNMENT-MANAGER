// Import Core Modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Import DB Connection
const connectdb = require('./config/db');

// Import Routes
const zoneRoutes = require('./routes/zoneRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // ✅ NEW

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectdb();

// Initialize Express App
const app = express();

// === Middleware ===

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies (req.body)
app.use(express.json());

// Serve uploaded images from /uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// === API Routes ===
app.use('/api/zones', zoneRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/bookings', bookingRoutes); // ✅ NEW

// === Server Startup ===
const PORT = process.env.PORT || 6500;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
