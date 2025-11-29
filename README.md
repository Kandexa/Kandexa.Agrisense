# Kandexa AgriSense 🌱

AI Supported Smart Agriculture platform built by **Mehmet Celil Kandemir**.  
This project combines **Full-Stack development + IoT + Databases** and is designed as a
portfolio-ready, production-style demo of a smart farming system.

The core idea:

> Low-cost ESP32-based sensor node sends soil & climate data to a Node.js API,  
> data is stored in MongoDB, and visualized on a modern web dashboard.  
> Later, an AI module (crop health detection) can be integrated on top.

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas, Mongoose
- **Frontend:** Vanilla JS + HTML + CSS (React-ready architecture)
- **IoT (planned):** ESP32, soil moisture sensor, DHT11/22, LDR
- **Other:** CORS, dotenv, nodemon

---

## 📁 Project Structure

```text
kandexa-agrisense/
  server/               # Node.js API + MongoDB connection
    config/db.js        # MongoDB connection helper
    models/SensorReading.js
    routes/readings.js  # REST API endpoints
    server.js           # Express app entry point
    .env                # Mongo URI (NOT committed to Git)
  public/               # Simple dashboard UI
    index.html
    main.js
  .gitignore
  README.md
