const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const db = require('./db');
const populationRoutes = require('./routes/population');

const app = express();
const PORT = 5555;

app.use(express.text());
app.use('/api/population', populationRoutes);

fs.createReadStream('./city_populations.csv')
    .pipe(csv())
    .on('data', (row) => {
        const keys = Object.keys(row);
        const values = Object.values(row);
    
        const population = values[0];
        const cityName = values[1];
        const state = values[2];
        db.insert({
            state: state.trim().toLowerCase(),
            city: cityName.trim().toLowerCase(),
            population: parseInt(population, 10)
        });
    })                
    .on('end', () => {
        app.listen(PORT, () => {
            console.log(`Server running on http://127.0.0.1:${PORT}`);
        });
    });    
