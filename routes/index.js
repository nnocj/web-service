const routes = require('express').Router();
const path = require('path');

// Serve static files from the 'public' directory
routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = routes;