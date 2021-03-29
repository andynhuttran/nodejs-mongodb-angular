const e = require('express');
const express = require('express');
const studentRepo = require('../repositories/studentRepository');
const JSONStream = require('JSONStream');

// const multer = require('multer');
// var upload = multer({
//     dest: './assets/pics/',
//     limits: { fileSize: 150000000 },
//     fileFilter: function (_req, file, cb) {
//         checkFileType(file, cb);
//     }
// });

// function checkFileType(file, cb) {
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check ext
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype);

//     if (mimetype && extname) {
//         return cb(null, true);
//     }
//     else {
//         cb('Error: Images Only!');
//     }
// }

// //upload file
// router.post("/profile", upload.single('file'),
//     (req, res) => {
//         console.log(req.file);
//         res.json(req.file);
//     }
// );


const router = express.Router();



router.get("", (req, res) => {
    studentRepo.getAll(function(cursor) {
        cursor.pipe(JSONStream.stringify()).pipe(res.type('json'))
    });
})

router.get("/:id", (req, res, next) => {
    let id = parseInt(req.params.id);
    studentRepo.getById(id, (student) => {
        feedbackStudentToClient(res, id, student, next);
    });
})

router.post("", (req, res, next) => {
    setImmediate(() => {
        if (validateStudentObject(req.body)) {
            studentRepo.addStudent(req.body, (student) => {
                res.status(201).json(student);
            });            
        }
        else {
            next({ msg: 'Invalid data' });
        }
    });
})



router.delete("/:id", (req, res, next) => {
    let id = parseInt(req.params.id);
    studentRepo.deleteById(id, (result) => {
        if (result.deletedCount === 0){
            feedbackStudentToClient(res, id, null, next);
        }
        else {
            res.json({msg: `${result.deletedCount} student(s) deleted`});
        }
    });
})

function feedbackStudentToClient(res, id, student, next) {
    if (student) {
        res.status(200).json(student);
    }
    else {
        next({ msg: `No student with id = ${id}` });
    }
}

function validateStudentObject(student) {

    return student.hasOwnProperty("id") &&
        student.hasOwnProperty("name") &&
        student.hasOwnProperty("course") &&
        student.hasOwnProperty("grade");
}

module.exports = { router };