const fs = require('fs');

function readFileStream(pathFile, callbackGetChunk, callbackEnd){
    const readable = fs.createReadStream(pathFile, 
                {encoding: 'utf8', highWaterMark: 16});

    readable.on('data', (chunk) => {
        callbackGetChunk(chunk);
    });

    readable.on('end', () => {
        callbackEnd();
    });
}

function getStream(pathFile){
    const readable = fs.createReadStream(pathFile, 
                                {encoding: 'utf8', highWaterMark: 16*1024});

    return readable;
}


module.exports = {readFileStream, getStream};
