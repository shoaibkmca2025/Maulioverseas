const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'enquiries.json');

function readEnquiries() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
  catch { return []; }
}

function saveEnquiries(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/enquiry', (req, res) => {
  const { name, mobile, email, city, course, source, message } = req.body;

  if (!name || !mobile || !city) {
    return res.status(400).json({ error: 'Name, mobile, and city are required.' });
  }
  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ error: 'Mobile must be a 10-digit number.' });
  }

  const enquiry = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    name: name.trim(),
    mobile: mobile.trim(),
    email: email?.trim() || '',
    city: city.trim(),
    course: course || 'Not specified',
    source: source || 'Not specified',
    message: message?.trim() || '',
  };

  const enquiries = readEnquiries();
  enquiries.push(enquiry);
  saveEnquiries(enquiries);

  console.log(`[${enquiry.timestamp}] New enquiry from ${name} (${mobile}) — ${city}`);

  res.status(201).json({ success: true, message: 'Enquiry received. We will contact you within 24 hours.' });
});

app.get('/api/enquiries', (req, res) => {
  const enquiries = readEnquiries();
  res.json({ count: enquiries.length, enquiries });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Mauli College Backend', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Mauli College backend running at http://localhost:${PORT}`);
});
