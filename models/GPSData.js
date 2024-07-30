const mongoose = require('mongoose');

const GPSDataSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const GPSData = mongoose.model('GPSData', GPSDataSchema);
module.exports = GPSData;
