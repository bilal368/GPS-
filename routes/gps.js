const express = require('express');
const router = express.Router();
const GPSData = require('../models/GPSData');


// Create a new GPS data point
router.post('/', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const gpsData = new GPSData({ latitude, longitude });
    await gpsData.save();
    res.status(201).json(gpsData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all GPS data points
router.get('/', async (req, res) => {
  try {
    const data = await GPSData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
