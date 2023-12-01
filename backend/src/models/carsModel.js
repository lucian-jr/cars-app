const mongoose = require('mongoose');

const CarsModelSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    chassis: { type: String, required: true },
    color: { type: String, required: true },
});

const CarsModel = mongoose.model('Cars', CarsModelSchema);

module.exports = CarsModel;