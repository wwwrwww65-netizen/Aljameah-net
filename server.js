import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Enable gzip/deflate compression for ultra-fast asset delivery
app.use(compression({
  threshold: 1024,
  level: 6
}));

// Helper to get default speed value from config.js
function getConfigDefaultSpeed() {
  try {
    const configPath = path.join(__dirname, 'config.js');
    if (fs.existsSync(configPath)) {
      const content = fs.readFileSync(configPath, 'utf8');
      const match = content.match(/window\.siteConfig\s*=\s*(\{[\s\S]*?\});/);
      if (match && match[1]) {
        const parsed = JSON.parse(match[1]);
        if (parsed.speedOptions && Array.isArray(parsed.speedOptions) && parsed.speedOptions.length > 0) {
          const def = parsed.speedOptions.find(s => s.selected || s.isDefault) || parsed.speedOptions[0];
          if (def && typeof def.value === 'string') {
            return def.value;
          }
        }
      }
    }
  } catch (err) {
    console.error('Error reading default speed from config.js:', err);
  }
  return '';
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fallback for adimg so nonexistent images gracefully return 1.jpg instead of 404
app.get('/adimg/:file', (req, res, next) => {
  const filePath = path.join(__dirname, 'adimg', req.params.file);
  if (fs.existsSync(filePath)) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.sendFile(filePath);
  }
  const fallback = path.join(__dirname, 'adimg', '1.jpg');
  if (fs.existsSync(fallback)) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.sendFile(fallback);
  }
  next();
});

// Serve static assets with high-performance caching headers
app.use(express.static(__dirname, {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (/\.(woff2|woff|ttf|eot)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (/\.(css|js|svg|png|jpg|jpeg|ico|webp)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=604800');
    }
  }
}));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'tofan-hotspot' });
});

// Notifications & announcements public content mock endpoint
app.get('/api/v1/public/content', (req, res) => {
  res.json({
    success: true,
    data: {
      notifications: [],
      announcements: []
    }
  });
});

// In-memory simulation session
let simulatedSession = {
  logged_in: false,
  username: '',
  loginTime: null,
  ip: '192.168.88.100',
  mac: 'AA:BB:CC:DD:EE:FF'
};

// MikroTik Hotspot login mock handler for testing in preview / dev server
app.all('/login', (req, res) => {
  const username = (req.query.username || req.body?.username || '').trim();
  const password = (req.query.password || req.body?.password || '').trim();
  res.setHeader('Content-Type', 'application/json');

  // Test error trigger keywords for testing error dialogs/blocker:
  if (username === '2222' || username.toLowerCase() === 'expired') {
    return res.json({
      logged_in: "no",
      error: "no valid profile found",
      action: "onLoginError"
    });
  }
  if (username === '3333' || username.toLowerCase() === 'used') {
    return res.json({
      logged_in: "no",
      error: "simultaneous session limit reached",
      action: "onLoginError"
    });
  }
  if (username.toLowerCase() === 'wrong' || username.toLowerCase() === 'error') {
    return res.json({
      logged_in: "no",
      error: "invalid username or password",
      action: "onLoginError"
    });
  }

  // If no username is provided (e.g. initial handshake /login?var=callBack on page load/refresh)
  if (!username) {
    if (simulatedSession.logged_in) {
      return res.json({
        logged_in: "yes",
        username: simulatedSession.username,
        domain: simulatedSession.domain,
        link_only: "http://1.1.1.1/status",
        link_login_only: "http://1.1.1.1/login",
        link_logout: "http://1.1.1.1/logout",
        link_status: "http://1.1.1.1/status",
        nas_id: "MikroTik-Node-01",
        ip: simulatedSession.ip,
        mac: simulatedSession.mac,
        action: "onLoggedIn"
      });
    }

    return res.json({
      logged_in: "no",
      link_only: "http://1.1.1.1/status",
      link_login_only: "http://1.1.1.1/login",
      link_logout: "http://1.1.1.1/logout",
      link_status: "http://1.1.1.1/status",
      nas_id: "MikroTik-Node-01",
      ip: simulatedSession.ip,
      mac: simulatedSession.mac,
      action: "onLoginStart"
    });
  }

  // Any other card succeeds in simulation!
  const defaultDomain = getConfigDefaultSpeed();
  const speedParam = req.query.speed !== undefined ? req.query.speed : (req.query.domain !== undefined ? req.query.domain : (req.body?.speed || req.body?.domain || ''));
  const domain = (speedParam || defaultDomain || '').trim();
  simulatedSession = {
    logged_in: true,
    username: username,
    domain: domain,
    loginTime: Date.now(),
    ip: req.ip || "192.168.88.100",
    mac: "70:85:C2:A1:3B:9E"
  };

  // Check if standard browser navigation vs AJAX
  const isAjax = req.xhr || req.headers['accept']?.includes('json') || req.query.var !== undefined || req.body?.dst !== undefined || req.headers['x-requested-with'];
  if (!isAjax && !req.query.username) {
    return res.redirect('/?status=connected');
  }

  return res.json({
    logged_in: "yes",
    username: username,
    domain: domain,
    link_only: "http://1.1.1.1/status",
    link_login_only: "http://1.1.1.1/login",
    link_logout: "http://1.1.1.1/logout",
    link_status: "http://1.1.1.1/status",
    nas_id: "MikroTik-Node-01",
    ip: simulatedSession.ip,
    mac: simulatedSession.mac,
    action: "onLoggedIn"
  });
});

// MikroTik Hotspot status JSON / HTML mock handler
app.all('/status', (req, res) => {
  const isAjax = req.headers.accept?.includes('application/json') || req.query.var !== undefined || req.xhr;
  const username = req.query.username || simulatedSession.username || "770807777";
  const defaultDomain = getConfigDefaultSpeed();
  const speedQuery = req.query.speed !== undefined ? req.query.speed : (req.query.domain !== undefined ? req.query.domain : null);
  const currentSpeed = (speedQuery !== null ? speedQuery : (simulatedSession.domain || defaultDomain || "")).trim();

  if (isAjax) {
    res.setHeader('Content-Type', 'application/json');
    return res.json({
      logged_in: "yes",
      username: username,
      ip: simulatedSession.ip,
      mac: simulatedSession.mac,
      bytes_in: "194412544",
      bytes_out: "936017920",
      bytes_in_nice: "185.4 MB",
      bytes_out_nice: "892.6 MB",
      uptime: "3h 45m",
      remain_bytes_total: "3435973836",
      session_time_left: "6d 12h",
      spes: currentSpeed,
      sspeed: currentSpeed,
      sps: currentSpeed + "_",
      update: currentSpeed + "_",
      action: "onStatusQuery"
    });
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// MikroTik Hotspot logout mock handler
app.all('/logout', (req, res) => {
  simulatedSession.logged_in = false;
  simulatedSession.username = '';
  
  const isAjax = req.headers.accept?.includes('application/json') || req.query.var !== undefined || req.xhr;
  if (isAjax) {
    res.setHeader('Content-Type', 'application/json');
    return res.json({
      logged_in: "no",
      action: "onLoggedOut"
    });
  }
  res.redirect('/');
});

// Return JSON 404 for unmatched /api/* requests
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Default fallback to index.html for client-side navigation (non-file requests)
app.get('{*all}', (req, res) => {
  // If requesting a file with an extension that does not exist, return 404 instead of index.html
  if (path.extname(req.path)) {
    return res.status(404).send('File Not Found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
