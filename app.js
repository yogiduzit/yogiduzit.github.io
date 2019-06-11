const express = require('express');
const path = require('path');

let app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/projects.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/resume.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'resume.html'));
});

// Loads all the files in public directory which can be easily referenced and added.
app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen('8080');
