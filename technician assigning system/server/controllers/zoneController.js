const Zone = require("../models/Zone");

// Create a new zone
const createzone = async (req, res) => {
    try {
        const { title, desc, status } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : '';

        const newZone = new Zone({ title, desc, image, status });
        const savedZone = await newZone.save();

        res.status(201).json(savedZone);
    } catch (error) {
        console.error("Error creating zone:", error);
        res.status(500).json({ message: "Failed to create zone", error: error.message });
    }
};

// Get all zones
const getzone = async (req, res) => {
    try {
        const zones = await Zone.find();
        res.status(200).json(zones);
    } catch (error) {
        console.error("Error fetching zones:", error);
        res.status(500).json({ message: "Failed to fetch zones", error: error.message });
    }
};

module.exports = { createzone, getzone };