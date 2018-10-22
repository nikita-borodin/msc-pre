const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

const pathToJSON = path.resolve(__dirname, 'index.json');

app.get('/genres', (req, res) => {
  fs.readFile(pathToJSON, 'utf8', (error, contents) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(contents);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});