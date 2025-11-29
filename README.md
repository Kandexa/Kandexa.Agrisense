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

This project demonstrates full-stack engineering, backend design, database modeling, and IoT-ready architecture.

---

## 🚀 Features

### ✔ Full-Stack Backend
- Express.js REST API  
- Mongoose + MongoDB Atlas  
- Sensor data model  
- Data validation  
- Clean route structure  

### ✔ Smart Agriculture Dashboard
- API health check  
- View latest sensor reading  
- Manual test data form  
- Auto-refresh UI  

### ✔ IoT-Ready Data Flow
Sensor devices (ESP32 or similar) can send JSON payloads like:

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
│   ├── .env                # Not included in GitHub
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── SensorReading.js
│   └── routes/
│       └── readings.js
│
├── public/                 # Frontend dashboard
│   ├── index.html
│   └── main.js
│
├── .gitignore
└── README.md

⚙️ Tech Stack
Backend

Node.js

Express

Mongoose

MongoDB Atlas

CORS

dotenv

Frontend

HTML

Vanilla JavaScript

CSS

IoT (Optional / Ready)

ESP32

Soil moisture sensor

DHT11/DHT22

LDR

HTTPClient library

🧪 Running the Backend Locally
1️⃣ Navigate to backend: cd server
2️⃣ Install dependencies: npm install
3️⃣ Create .env inside /server:MONGO_URI=your_mongodb_connection_string
                               PORT=5000
4️⃣ Start development server: npm run dev
Expected output: MongoDB connected: <cluster-url>
                 Server running on http://localhost:5000

🌐 API Endpoints
GET /api/health

Health check endpoint.

Response:      {
                "status": "ok",
                "message": "Kandexa AgriSense API running"
               }
POST /api/readings

Stores a new sensor reading.

Headers: Content-Type: application/json
Body: {
        "sensorId": "field-1",
        "soilMoisture": 50,
        "airTemp": 23,
        "airHumidity": 60,
        "lightLevel": 900
       }

GET /api/readings/latest

Returns the latest reading.

Optional: /api/readings/latest?sensorId=field-1

GET /api/readings?limit=50

Returns last N readings.
Default = 50.

📊 Dashboard Usage

Open in browser: http://localhost:5000
Dashboard features:
-API status badge
-Last sensor reading
-Manual test data input
-Auto-refresh metrics
This allows full demo without ESP32 hardware.

🔌 ESP32 Integration (Optional / Ready)

Example firmware code (Arduino / PlatformIO):
   String apiURL = "http://YOUR_PC_LOCAL_IP:5000/api/readings";
   HTTPClient http;
   http.begin(apiURL);
   http.addHeader("Content-Type", "application/json");
  
   String body = "{\"sensorId\":\"field-1\",\"soilMoisture\":40,\"airTemp\":24,\"airHumidity\":55,\"lightLevel\":800}";
   http.POST(body);
   http.end();
  
ESP32 will send live data → API stores it → Dashboard displays it.

📸 Screenshots (optional to add)

Dashboard UI

API health response

MongoDB Atlas collections

Test data examples

(You can add images later.)

👨‍💻 Author

Mehmet Celil Kandemir
Control & Automation • Full-Stack Developer • IoT Enthusiast
Creator of Kandexa automation & software solutions.

📄 License

This project is open for educational and portfolio purposes.
