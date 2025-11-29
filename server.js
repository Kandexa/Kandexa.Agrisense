// server/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// .env yükle
dotenv.config();

// MongoDB'ye bağlan
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
const readingsRouter = require('./routes/readings');
app.use('/api/readings', readingsRouter);

// Statik dosyalar (public klasörü)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Kandexa AgriSense API running' });
});

// Server başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
