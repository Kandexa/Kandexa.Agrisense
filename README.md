# 🌱 Kandexa AgriSense

Smart agriculture platform developed by **Mehmet Celil Kandemir**.  
This project collects, stores and displays sensor data using a Node.js API, MongoDB Atlas and a simple dashboard UI.  
ESP32 gibi IoT cihazları sisteme veri gönderebilir.

---

## 🚀 Features
- Node.js + Express REST API  
- MongoDB Atlas database  
- Dashboard (HTML + JS)  
- Manual test data form  
- IoT-ready JSON endpoints  

---

## 📁 Project Structure
kandexa-agrisense/
server/ → API (Node.js + Express)
public/ → Dashboard (index.html + main.js)
.gitignore
README.md

yaml
Kodu kopyala

---

## ⚙️ Run Locally
```bash
cd server
npm install
Create .env inside /server:

env
Kodu kopyala
MONGO_URI=your_mongo_uri
PORT=5000
Start:

bash
Kodu kopyala
npm run dev
Open:

arduino
Kodu kopyala
http://localhost:5000
🌐 API Endpoints
POST /api/readings
Send sensor data:

json
Kodu kopyala
{
  "sensorId": "field-1",
  "soilMoisture": 45,
  "airTemp": 24,
  "airHumidity": 55,
  "lightLevel": 800
}
GET /api/readings/latest
Get latest reading.

🔌 ESP32 (Optional)
cpp
Kodu kopyala
String apiURL = "http://YOUR_PC_IP:5000/api/readings";
👨‍💻 Author
Mehmet Celil Kandemir – Full-Stack • IoT • Automation
