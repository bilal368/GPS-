// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const gpsRoutes = require('./routes/gps');
const app = express();
const port = process.env.PORT || 3009;

const geolib = require('geolib');

const distance = geolib.getDistance(
  { latitude: 51.5103, longitude: 7.49347 },
  { latitude: 51.518, longitude: 7.45425 }
);

console.log(`Distance: ${distance} meters`);

// Middleware
app.use(express.json());

// MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('GPS Project API');
});

app.use('/api/gps', gpsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
