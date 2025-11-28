/**
 * Sunway Demo - Node.js 18 Web Server
 * Port: 80
 */

const http = require("http");
const os = require("os");
const { randomUUID } = require("crypto");

const PORT = 80;

// Get system info
function getSystemInfo() {
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus().length,
    totalMemory: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
    freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
    uptime: (os.uptime() / 3600).toFixed(2) + " hours",
    nodeVersion: process.version,
  };
}

// HTML Template
function getHTML() {
  const info = getSystemInfo();
  const requestId = randomUUID();
  const timestamp = new Date().toLocaleString();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunway Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      padding: 40px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #1a1a2e;
      font-size: 28px;
      margin-bottom: 8px;
    }
    .header p {
      color: #666;
      font-size: 14px;
    }
    .badge {
      display: inline-block;
      background: #4CAF50;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      margin-top: 10px;
    }
    .info-card {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .info-card h3 {
      color: #333;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e0e0e0;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    .info-row:last-child { border-bottom: none; }
    .info-label { color: #666; font-size: 13px; }
    .info-value { color: #333; font-weight: 500; font-size: 13px; }
    .footer {
      text-align: center;
      color: #999;
      font-size: 12px;
      margin-top: 20px;
    }
    .refresh-btn {
      display: block;
      width: 100%;
      padding: 12px;
      background: #1a1a2e;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .refresh-btn:hover { background: #16213e; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Sunway Demo</h1>
      <p>Node.js ${info.nodeVersion} Web Server</p>
      <span class="badge">● Running on Port ${PORT}</span>
    </div>
    
    <div class="info-card">
      <h3>System Information</h3>
      <div class="info-row">
        <span class="info-label">Hostname</span>
        <span class="info-value">${info.hostname}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Platform</span>
        <span class="info-value">${info.platform} (${info.arch})</span>
      </div>
      <div class="info-row">
        <span class="info-label">CPUs</span>
        <span class="info-value">${info.cpus} cores</span>
      </div>
      <div class="info-row">
        <span class="info-label">Total Memory</span>
        <span class="info-value">${info.totalMemory}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Free Memory</span>
        <span class="info-value">${info.freeMemory}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Uptime</span>
        <span class="info-value">${info.uptime}</span>
      </div>
    </div>
    
    <div class="info-card">
      <h3>Request Info</h3>
      <div class="info-row">
        <span class="info-label">Request ID</span>
        <span class="info-value" style="font-size: 11px;">${requestId}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Timestamp</span>
        <span class="info-value">${timestamp}</span>
      </div>
    </div>
    
    <button class="refresh-btn" onclick="location.reload()">Refresh</button>
    
    <div class="footer">
      Sunway Demo &copy; 2025
    </div>
  </div>
</body>
</html>
`;
}

// Create server
const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(getHTML());
});

// Start server
server.listen(PORT, () => {
  console.log("=".repeat(45));
  console.log("🚀 Sunway Demo Server");
  console.log(`   Running on http://localhost:${PORT}`);
  console.log(`   Node.js ${process.version}`);
  console.log("=".repeat(45));
});
