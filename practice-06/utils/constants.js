const path = require('path');

const PORT = 3000;
const LOG_FILE_PATH = path.join(__dirname, 'access.log');

module.exports = {PORT, LOG_FILE_PATH};