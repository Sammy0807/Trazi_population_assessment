const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/state/:state/city/:city', (req, res) => {
    const { state, city } = req.params;
    db.findOne({ state: state.toLowerCase(), city: city.toLowerCase() }, (err, doc) => {
        if (err) {
            return res.status(500).send({ error: 'Internal server error' });
        }
        if (!doc) {
            return res.status(400).send({ error: 'State/City combination not found' });
        }
        res.status(200).send({ population: doc.population });
    });
});


router.put('/state/:state/city/:city', (req, res) => {
    const { state, city } = req.params;
    const population = parseInt(req.body, 10);

    if (!population || isNaN(population)) {
        return res.status(400).send({ error: 'Invalid population data' });
    }

    db.update({ state: state.toLowerCase(), city: city.toLowerCase() }, { state: state.toLowerCase(), city: city.toLowerCase(), population }, { upsert: true }, (err, numReplaced, upsert) => {
        if (err) {
            return res.status(400).send({ error: 'Data could not be added' });
        }

        if (upsert) {
            res.status(201).send({ message: 'Data created successfully' });
        } else {
            res.status(200).send({ message: 'Data updated successfully' });
        }
    });
});

module.exports = router;
