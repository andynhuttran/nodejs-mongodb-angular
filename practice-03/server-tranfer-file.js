const server = require('http').createServer();
const {readFileSync, readFileAsyn, readFileByStream, getStream} = require('./readfile')
const path = require('path');

server.on('request', handleRequest);

function handleRequest(request, response){

    if (request.url === '/favicon.ico') {
        return;
    }

    response.writeHead(200, {'Content-Type': 'text/plain'});    
    let pathFile = path.join(__dirname, "data.txt");

    //1. use Sync
    // let content = readFileSync(pathFile);
    // sendContent(response, "readFileSync\n" + content);

    //2. use Asyn
    readFileAsyn(pathFile, (error, content) => {
        if (error){
            sendContent(response, error);
        }
        else {
            sendContent(response, "readFileAsyn\n" + content);
        }
    });

    //3. use stream and callback
    // readFileByStream(
    //     pathFile, 
    //     //callback get chunk
    //     (chunk) => {
    //         response.write(chunk);
    //     },

    //     //callback end
    //     () => {
    //         response.end();
    //         console.log("Done - readFileByStream");
    //     }
    // );

    //4. use stream + pipe
    // let stream = getStream(pathFile);
    // stream.on('end', () => console.log("Done - stream data"));
    // stream.pipe(response);
}


function sendContent(response, content){
    response.write(content);
    response.end();
    console.log("Done - sendContent")
}

server.listen(8088, () => console.log("Start at 8088"));


