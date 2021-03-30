const path = require('path');

const PORT = 3000;
const LOG_FILE_PATH = path.join(__dirname, 'access.log');
const URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'studentDB';

module.exports = {PORT, LOG_FILE_PATH, URL, DATABASE_NAME};