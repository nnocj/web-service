
const express = require('express');
const app = express();
const path = require('path');

const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://nicholascommey01:Good2356u%40@cluster0.nfzhinb.mongodb.net/';
const client = new MongoClient(uri);

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Optional: serve JSON from a real route (if you want)
app.get('/professional.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'professional.json'));
});

// Connect to MongoDB and log the connection status
app.get('/api/profile', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('profile');
    const collection = database.collection('nicholas');

    const data = await collection.findOne({});
    console.log('Fetched:', data);

    if (data) {
      res.json(data);  // ⬅️ Just send the whole doc directly!
    } else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
