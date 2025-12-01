#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "WIFI_ADIN";
const char* password = "WIFI_SIFREN";

String apiURL = "http://YOUR_PC_LOCAL_IP:5000/api/readings";

int soilPin = 34;  
int ldrPin  = 35; 

void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.print("WiFi Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
}

void loop() {

  int soilRaw = analogRead(soilPin);
  int lightRaw = analogRead(ldrPin);

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
