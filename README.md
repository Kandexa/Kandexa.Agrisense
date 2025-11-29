# 🌱 Kandexa AgriSense  
**AI-Ready Smart Agriculture Platform (Node.js + MongoDB + Dashboard)**  
Built by **Mehmet Celil Kandemir**

Kandexa AgriSense is a portfolio-grade smart agriculture platform designed to collect, store, and visualize environmental sensor data.  
The system is fully ready for IoT integration (ESP32 / sensor nodes), and includes:

- 🌍 REST API (Node.js + Express)
- 📦 Cloud Database (MongoDB Atlas)
- 📊 Real-time Dashboard (HTML + JS)
- 🔌 IoT Data Pipeline (POST JSON → API → Database → UI)
- 🔮 Future-ready AI module (Crop disease detection)

---

## 🚀 Features

### ✔ Full-Stack Backend
- Express.js REST API  
- Mongoose + MongoDB Atlas  
- Data validation  
- Clean architecture  

### ✔ Smart Agriculture Dashboard
- API health check  
- View latest sensor reading  
- Manual test data form  
- Auto-refresh metrics  

### ✔ IoT-Ready Data Flow
Devices (ESP32 or similar) can send JSON payloads like:

```json
{
  "sensorId": "field-1",
  "soilMoisture": 45,
  "airTemp": 24,
  "airHumidity": 55,
  "lightLevel": 800
}
📁 Project Structure
kandexa-agrisense/
│
├── server/                 # Backend (Node.js + Express)
│   ├── server.js
│   ├── package.json
│   ├── .env                # not included in GitHub
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── SensorReading.js
│   └── routes/
│       └── readings.js
│
├── public/                 # Frontend Dashboard
│   ├── index.html
│   └── main.js
│
├── .gitignore
└── README.md

⚙️ Tech Stack
Backend
-Node.js
-Express
-MongoDB Atlas
-Mongoose
-dotenv
-CORS

Frontend
-HTML
-CSS
-Vanilla JavaScript

IoT (Planned)
-ESP32
-Soil Moisture Sensor
-DHT11/DHT22
-LDR

🧪 Run Locally
1️⃣ Go to backend folder:
cd server
2️⃣ Install dependencies:
npm install
3️⃣ Add .env in /server:
MONGO_URI=your_mongodb_connection_string
PORT=5000
4️⃣ Start server:
npm run dev
Expected output:
MongoDB connected: <cluster-url>
Server running on http://localhost:5000

🌐 API Endpoints
GET /api/health
Check server status.
Response:

{
  "status": "ok",
  "message": "Kandexa AgriSense API running"
}

POST /api/readings
Store a sensor reading.
Body Example:

POST /api/readings
Store a sensor reading.
Body Example:

GET /api/readings/latest
Get last reading.

GET /api/readings?limit=50
Get last N readings (default: 50).

📊 Dashboard
Open in browser:
http://localhost:5000

Dashboard includes:
-API status badge
-Last reading
-Test data sender
-Refresh button
Works even without ESP32.

🔌 ESP32 Integration (Optional)
Example firmware:
String apiURL = "http://YOUR_PC_LOCAL_IP:5000/api/readings";

HTTPClient http;
http.begin(apiURL);
http.addHeader("Content-Type", "application/json");

String body = "{\"sensorId\":\"field-1\",\"soilMoisture\":40,\"airTemp\":24,\"airHumidity\":55,\"lightLevel\":800}";
http.POST(body);
http.end();

👨‍💻 Author
Mehmet Celil Kandemir
Control & Automation • Full-Stack Development • IoT • Kandexa Projects
