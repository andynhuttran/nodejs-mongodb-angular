const express = require('express');
const studentRepo = require('../repositories/studentRepository');
const multer = require('multer');
var upload = multer({
    dest: './assets/pics/',
    limits: { fileSize: 150000000 },
    fileFilter: function (_req, file, cb) {
        checkFileType(file, cb);
    }
});

function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb('Error: Images Only!');
    }
}


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
        if (validateStudentObject(req.body)) {
            let student = studentRepo.addStudent(req.body);
            res.status(201).json(student);
        }
        else {
            next({ msg: 'Invalid data' });
        }
    });
})

//upload file
router.post("/profile", upload.single('file'),
    (req, res) => {
        console.log(req.file);
        res.json(req.file);
    }
);


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

function feedbackStudentToClient(res, id, student, next) {
    if (student) {
        res.status(200).json(student);
    }
    else {
        next({ msg: `No student with id = ${id}` });
    }
}

function validateStudentObject(student) {
    return student.hasOwnProperty("name") &&
        student.hasOwnProperty("course") &&
        student.hasOwnProperty("grade");
}

module.exports = { router };