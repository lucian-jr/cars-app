const mongoose = require('mongoose');

const CarsModel = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    chassis: { type: String, required: true },
    color: { type: String, required: true },
});

module.exports = CarsModel;