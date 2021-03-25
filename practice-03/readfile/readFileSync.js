const fs = require('fs');

function readFileSync(pathFile){
    const greet = fs.readFileSync(pathFile, 'utf-8');
    return greet;
}

module.exports = readFileSync;