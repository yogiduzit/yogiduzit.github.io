const express = require('express');
const path = require('path');

let app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Loads all the files in public directory which can be easily referenced and added.
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen('8080');
