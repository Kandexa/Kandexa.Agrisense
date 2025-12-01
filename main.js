const API_BASE = 'http://localhost:5000';

const statusEl = document.getElementById('status');
const sensorIdEl = document.getElementById('sensorId');
const lastUpdateEl = document.getElementById('lastUpdate');
const soilMoistureEl = document.getElementById('soilMoisture');
const airTempEl = document.getElementById('airTemp');
const airHumidityEl = document.getElementById('airHumidity');
const lightLevelEl = document.getElementById('lightLevel');
const latestErrorEl = document.getElementById('latestError');

const refreshBtn = document.getElementById('refreshBtn');
const sendTestBtn = document.getElementById('sendTestBtn');

const testSensorId = document.getElementById('testSensorId');
const testSoilMoisture = document.getElementById('testSoilMoisture');
const testAirTemp = document.getElementById('testAirTemp');
const testAirHumidity = document.getElementById('testAirHumidity');
const testLightLevel = document.getElementById('testLightLevel');

async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/api/health`);
    if (!res.ok) throw new Error('Health check failed');
    const data = await res.json();
    statusEl.textContent = `API: ${data.status}`;
  } catch (error) {
    statusEl.textContent = 'API: offline';
  }
}

function formatDate(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString);
  return date.toLocaleString('tr-TR');
}

async function loadLatestReading() {
  latestErrorEl.textContent = '';
  try {
    const res = await fetch(`${API_BASE}/api/readings/latest`);
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      latestErrorEl.textContent = errData.message || 'No data found';
      return;
    }

    const data = await res.json();

    sensorIdEl.textContent = data.sensorId || '—';
    lastUpdateEl.textContent = formatDate(data.createdAt);
    soilMoistureEl.textContent = data.soilMoisture ?? '—';
    airTempEl.textContent = data.airTemp ?? '—';
    airHumidityEl.textContent = data.airHumidity ?? '—';
    lightLevelEl.textContent = data.lightLevel ?? '—';
  } catch (error) {
    latestErrorEl.textContent = 'Error fetching latest data';
    console.error(error);
  }
}

async function sendTestReading() {
  const body = {
    sensorId: testSensorId.value || 'field-1',
    soilMoisture: Number(testSoilMoisture.value),
    airTemp: Number(testAirTemp.value),
    airHumidity: Number(testAirHumidity.value),
    lightLevel: Number(testLightLevel.value),
  };

  const testErrorEl = document.getElementById('testError');
  testErrorEl.textContent = '';

  try {
    const res = await fetch(`${API_BASE}/api/readings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      testErrorEl.textContent = errData.message || 'Failed to send test data';
      return;
    }

    await loadLatestReading();
  } catch (error) {
    testErrorEl.textContent = 'Error sending test data';
    console.error(error);
  }
}

refreshBtn.addEventListener('click', loadLatestReading);
sendTestBtn.addEventListener('click', sendTestReading);

checkHealth();
loadLatestReading();

