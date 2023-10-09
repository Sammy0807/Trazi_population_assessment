const Datastore = require('nedb');
const db = new Datastore({ filename: './db/cityPopulations.db', autoload: true });
module.exports = db;
