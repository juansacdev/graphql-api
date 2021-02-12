// configuramos los Queries

const { courses, students } = require('./data')

module.exports = {

    getCourses: () => {
        return courses
    },

    getCourse: (root ,{ _id }) => {
        console.log(root, _id);
        return courses.find(course => course._id === _id)
    },


    getStudents: () => {
        return students
    },

    getStudent: (root ,{ _id }) => {
        console.log(root, _id);
        return students.find(student => student._id === _id)
    }

}