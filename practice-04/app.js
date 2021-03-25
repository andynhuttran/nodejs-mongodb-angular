const { Subject } = require('rxjs');
const server = require('http').createServer();
const url = require('url');
const {fork} = require('child_process');
const CONSTANT = require('./lib/constants');
const utils = require('./lib/utils');

let subject = new Subject();

let port = CONSTANT.PORT;

server.on("request", handleRequest);
server.listen(port, () => 
    console.log(`Server is started in port: ${port} at ${utils.getCurrentTime()}`)
);

function handleRequest(req, res){
    if (req.url === '/favicon.ico') {
        return;
    }
    subject.next({req, res});
}

subject.subscribe(logInfo);
subject.subscribe(responseToUser);

function logInfo(){
    console.log("A request at: " + utils.getCurrentTime());
}

function responseToUser(obj){
    let myURL = url.parse(obj.req.url, true);
    let n = myURL.query.n;
    console.log(`n = ${n}`);

    //delegate a child to process data
    const childProcess = fork('fibonaci-controller.js');
    childProcess.send(n); //send request to a child

    //listen feedback from child
    childProcess.on('message', (result) => {  
        feedbackToClient(obj.res, result.status_code, JSON.stringify(result));
    });
}

function feedbackToClient(response, status_code, json){
    response.writeHead(status_code, {"Content-Type": "application/json"});
    response.end(json);
}
