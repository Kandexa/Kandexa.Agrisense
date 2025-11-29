#include <WiFi.h>
#include <HTTPClient.h>

// ---- WiFi Ayarları ----
const char* ssid = "WIFI_ADIN";
const char* password = "WIFI_SIFREN";

// ---- API Endpoint ----
String apiURL = "http://YOUR_PC_LOCAL_IP:5000/api/readings";

// ---- Sensörler ----
int soilPin = 34;  // Toprak nemi (analog)
int ldrPin  = 35;  // Işık sensörü (analog)

void setup() {
  Serial.begin(115200);

  // WiFi bağlan
  WiFi.begin(ssid, password);
  Serial.print("WiFi Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
}

void loop() {

  // ----- Sensör Okumaları -----
  int soilRaw = analogRead(soilPin);
  int lightRaw = analogRead(ldrPin);

  // ----- JSON Göndermek İçin -----
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    http.begin(apiURL);
    http.addHeader("Content-Type", "application/json");

    String jsonBody = "{\"sensorId\":\"field-1\","
                      "\"soilMoisture\":" + String(soilRaw) + ","
                      "\"airTemp\":24,"
                      "\"airHumidity\":55,"
                      "\"lightLevel\":" + String(lightRaw) + "}";

    int httpResponseCode = http.POST(jsonBody);

    Serial.print("POST Response: ");
    Serial.println(httpResponseCode);
    Serial.print("Body: ");
    Serial.println(jsonBody);

    http.end();
  }

  delay(10000); // 10 saniye
}
