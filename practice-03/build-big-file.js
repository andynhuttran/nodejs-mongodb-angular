const fs = require('fs');
const path = require('path');
const fileName = 'data.txt';


function createFile(fileName){
    const streamWriter = fs.createWriteStream(path.join(__dirname, fileName));
    
    for (let i = 0; i < 1e6; ++i){
        streamWriter.write("This is unlikely to be happening frequently");
    }
    streamWriter.end();
}

function main(){
    console.log("File is building...")
    setImmediate(createFile, fileName);
}

main();





