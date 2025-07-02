const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); // Ensure this is your multer config
const { getzone, createzone } = require('../controllers/zoneController');

// Route to create a new zone (with image upload)
router.post('/', upload.single('image'), createzone);

// Route to get all zones
router.get('/', getzone);

module.exports = router;