const {MongoClient} = require('mongodb');
const Constants = require('../utils/constants');



async function getDBConnectionHepler(url, databaseName, callback){
    console.log("Run in getDBConnectionHepler");

    const client = new MongoClient(url,  { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(databaseName);
    callback(db);
}

function getDBConnection(callback){
    getDBConnectionHepler(Constants.URL, Constants.DATABASE_NAME, callback);
}

module.exports = {getDBConnection}