const { Subject } = require('rxjs');
const server = require('http').createServer();
const url = require('url');
const moment = require('moment');
const {fork} = require('child_process');

let subject = new Subject();

let port = 4000

server.on("request", handleRequest);
server.listen(port, () => console.log(`Server is started at ${port}`));

function handleRequest(req, res){
    if (req.url === '/favicon.ico') {
        return;
    }
    subject.next({req, res});
}

subject.subscribe(logInfo);
subject.subscribe(responseToUser);


function logInfo(){
    console.log("A request at: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
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
        obj.res.end(`Hello world: ${result}`);
    });
}

