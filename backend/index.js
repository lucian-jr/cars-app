
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');
const CarsModel = require('./src/models/carsModel');

const port = 3030;

app.use(express.json());
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',  // Substitua pelo URL do seu aplicativo frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.post('/car', async (req, res) => {

    console.log(req.body);
    
    try {
        const { brand, model, name, year, price, chassis, color } = req.body;

        const car = new CarsModel({ brand, model, name, year, price, chassis, color });

        await car.save();
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.listen(port, () => {
    console.log('Connected to data base')
    console.log(`Server is running on http://localhost:${port}`);
})