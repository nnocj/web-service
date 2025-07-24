
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Optional: serve JSON from a real route (if you want)
app.get('/professional.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'professional.json'));
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
