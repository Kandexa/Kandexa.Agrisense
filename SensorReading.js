const mongoose = require('mongoose');

const SensorReadingSchema = new mongoose.Schema({
  sensorId: {
    type: String,
    required: true,
  },
  soilMoisture: {
    type: Number,
    required: true,
  },
  airTemp: {
    type: Number,
    required: true,
  },
  airHumidity: {
    type: Number,
    required: true,
  },
  lightLevel: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SensorReading', SensorReadingSchema);

