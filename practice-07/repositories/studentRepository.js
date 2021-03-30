const database = require('../db/db');

let db = undefined;
database.getDBConnection((dbObj) => {
    console.log("In getDBConnection repo");
    db = dbObj;
});

function addStudent(student, callback){
    let studentCollection = db.collection("students");
    studentCollection.insertMany([student]);
    callback(student);
}

function getAll(callback){
    let studentCollection = db.collection("students");
    let dataSet = studentCollection.find();
    callback(dataSet);
}

function getById(id, callback){
    let studentCollection = db.collection("students");
    studentCollection.findOne({"id": id})
                        .then((std => {
                            callback(std);
                        }));

}


function deleteById(id, callback){
    let studentCollection = db.collection("students");
    studentCollection.deleteOne({"id": id}).then((result) => {
        callback(result);
    });
}



module.exports = {addStudent, getAll, getById, deleteById};