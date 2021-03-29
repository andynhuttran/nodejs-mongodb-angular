const e = require('express');
const express = require('express');
const studentRepo = require('../repositories/studentRepository');

const router = express.Router();

router.get("", (req, res) => {
    setImmediate(() => {
        let students = studentRepo.getAll();
        res.status(200).json(students);
    });
})

router.get("/:id", (req, res, next) => {
    setImmediate(() => {
        let student = studentRepo.getById(req.params.id);
        feedbackStudentToClient(res, req.params.id, student, next);  
    });
})

router.post("", (req, res, next) => {
    setImmediate(() => {        
        if (validateStudentObject(req.body)){
            let student = studentRepo.addStudent(req.body);
            res.status(201).json(student);            
        }
        else {
            next({msg: 'Invalid data'});
        }
    });
})

router.put("/:id", (req, res, next) => {
    setImmediate(() => {
        let student = studentRepo.updateById(req.params.id, req.body);
        feedbackStudentToClient(res, req.params.id, student, next);
    });
})

router.delete("/:id", (req, res, next) => {    
    setImmediate(() => {
        let student = studentRepo.deleteById(req.params.id);
        feedbackStudentToClient(res, req.params.id, student, next);
    });
})

function feedbackStudentToClient(res, id, student, next){
    if (student){
        res.status(200).json(student);
    }
    else {
        next({msg: `No student with id = ${id}`});
    }
}

function validateStudentObject(student){
    return  student.hasOwnProperty("name") &&
            student.hasOwnProperty("course") &&
            student.hasOwnProperty("grade");            
}

module.exports = {router};