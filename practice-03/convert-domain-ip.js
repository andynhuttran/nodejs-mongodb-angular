const resolve4 = require('dns').resolve4;
const {promisify} = require('util');

const handleResult = promisify(resolve4);
async function convertDomainToIp(domain){
    try {
        const ip = await handleResult(domain);
        console.log("Ip is: " + ip);
    }
    catch (error){
        console.log("Can not reach: " + error.hostname);
    }
}

let domain = "www.miu.edu";
convertDomainToIp(domain);
