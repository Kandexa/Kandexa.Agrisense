const express = require('express');
const router = express.Router();
const SensorReading = require('../models/SensorReading');

router.post('/', async (req, res) => {
  try {
    const { sensorId, soilMoisture, airTemp, airHumidity, lightLevel } = req.body;

    if (
      !sensorId ||
      soilMoisture === undefined ||
      airTemp === undefined ||
      airHumidity === undefined ||
      lightLevel === undefined
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const reading = await SensorReading.create({
      sensorId,
      soilMoisture,
      airTemp,
      airHumidity,
      lightLevel,
    });

    res.status(201).json(reading);
  } catch (error) {
    console.error('Error creating reading:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/latest', async (req, res) => {
  try {
    const { sensorId } = req.query;

    const query = sensorId ? { sensorId } : {};
    const latestReading = await SensorReading.findOne(query).sort({ createdAt: -1 });

    if (!latestReading) {
      return res.status(404).json({ message: 'No readings found' });
    }

    res.json(latestReading);
  } catch (error) {
    console.error('Error fetching latest reading:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const readings = await SensorReading.find().sort({ createdAt: -1 }).limit(limit);
    res.json(readings);
  } catch (error) {
    console.error('Error fetching readings:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

