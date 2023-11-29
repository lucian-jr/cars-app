require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.URI)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MoongoDB error connection'));

db.once('open', () => {
    console.log('Conected to MongoDB!');
});

module.exports = db;