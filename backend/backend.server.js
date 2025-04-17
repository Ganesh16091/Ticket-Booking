const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travel-booking');

// Sample route
app.get('/', (req, res) => {
  res.send('Travel Booking API running!');
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

