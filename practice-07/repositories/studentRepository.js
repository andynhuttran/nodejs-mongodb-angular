const {MongoClient} = require('mongodb');
const {URL} = require('../utils/constants');

const client = new MongoClient(URL);

function addStudent(student, callback){
    client.connect(function(err) {
        let db = client.db("studentDB");
        let studentCollection = db.collection("students");

        studentCollection.insertMany([student]);
        callback(student);
    });
}

function getAll(callback){
    client.connect(function(err) {
        let db = client.db("studentDB");
        let studentCollection = db.collection("students");

        let dataSet = studentCollection.find();
        callback(dataSet);
    });
}

function getById(id, callback){
    client.connect(function(err) {
        let db = client.db("studentDB");
        let studentCollection = db.collection("students");

        studentCollection.findOne({"id": id}).then((std => {
            callback(std);
        }));
        
    });

}


function deleteById(id, callback){
    client.connect(function(err) {
        let db = client.db("studentDB");
        let studentCollection = db.collection("students");

        studentCollection.deleteOne({"id": id}).then((result) => {
            callback(result);
        });
        
    });
}



module.exports = {addStudent, getAll, getById, deleteById};