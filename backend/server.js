const express = require('express');
const app = express();
const port = 3001;

// Allow CORS so frontend can connect from different port
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Load About Me data from JSON file
const aboutData = require('./data/about.json');

// API endpoint for About Me
app.get('/api/about', (req, res) => {
  res.json(aboutData);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
  console.log('Test it: http://localhost:3001/api/about');
});