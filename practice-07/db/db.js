const {MongoClient} = require('mongodb');
const Constants = require('../utils/constants');

let db = undefined;

function getDBConnectionHepler(url, databaseName, callback){
    console.log("Run in getDBConnectionHepler");

    const client = new MongoClient(url);    
    client.connect(function(err) {
        db = client.db(databaseName);
        console.log("DB is created: " + db);
        callback(db);
    });
}

function getDBConnection(callback){
    if (db) {
        callback(db);
    }
    else {
        getDBConnectionHepler(Constants.URL, Constants.DATABASE_NAME, callback);
    }
}

module.exports = {getDBConnection}