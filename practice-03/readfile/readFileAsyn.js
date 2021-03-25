const fs = require('fs');

function readFileAsyn(pathFile, callback){
    const greet = fs.readFile(pathFile, 'utf-8', callback);
}

module.exports = readFileAsyn;