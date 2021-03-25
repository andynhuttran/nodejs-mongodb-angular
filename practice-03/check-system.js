const {cpus, totalmem} = require('os');

function checkSystem(memThreshold, coreThreshold){
    console.log("Checking your system…");
    setImmediate(checkingHelper);
}

function checkingHelper(){
    let memory = totalmem();
    if (memory < memThreshold){
        console.log("You mem is too small to support " + memory);
    }
    else {
        let cores = cpus();
        if (cores.length < coreThreshold) {
            console.log("Processor is not supported");
        }
        else {
            //success
            console.log("Checking is done");
        }
    }   
}


checkSystem(4*1024*1024*1024, 2);
