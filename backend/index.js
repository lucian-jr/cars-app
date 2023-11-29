require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect(process.env.URI)
    .then(() => {
        console.log('Connected to data base')
        app.emit('ready');
    })
    .catch(e => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.on('ready', () => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })
});