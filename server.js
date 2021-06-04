const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

const PATH_TO_FILE = {
  '/': 'index',
  '/experience': 'experience',
  '/projects': 'projects',
  '/resume': 'resume'
};

Object.entries(PATH_TO_FILE).forEach(([pathName, file]) => {
  app.get(pathName, (req, res) => {
    res.sendFile(path.join(__dirname, `${file}.html`));
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
});