const students = [
    {id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95},
    {id: 2, name: "Mike", course: "CS573", picture: "1570286884.jpg", grade: 90},
    {id: 3, name: "Asley", course: "CS571", picture: "1570286884.jpg", grade: 91},
    {id: 4, name: "Tom", course: "CS572", picture: "1570286884.jpg", grade: 89}
]

let maxId = 4;

function addStudent(student){
    student.id = ++maxId;
    students.push(student);
    return student;
}

function getAll(){
    return students;
}

function getById(id){
    return students.find(stu => stu.id == id); //undefine if can not found
}

function updateById(id, student){
    for (let i = 0; i < students.length; ++i){
        if (students[i].id == id){
            student.id = id;
            students[i] = student;
            return students[i];
        }
    }

    return undefined;
}

function deleteById(id){
    return removeArray(students, "id", id);    
}

function removeArray(arr, attribute, value){
    for (let i = 0; i < arr.length; ++i){
        let element = arr[i];

        if (element && element.hasOwnProperty(attribute)){
            if (element[attribute] == value){
                arr.splice(i, 1);
                return element;
            }
        }
    }

    return undefined;
}


module.exports = {addStudent, getAll, getById, updateById, deleteById};