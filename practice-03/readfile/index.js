const readFileSync = require('./readFileSync');
const readFileAsyn = require('./readFileAsyn');
const {readFileByStream, getStream} = require('./readFileByStream');

module.exports = {readFileSync, readFileAsyn, readFileByStream, getStream};