const {
    createOneCourse,
    editOneCourse,
} = require('./components/Course/controller')

const {
    createOneStudent,
    editOneStudent,
} = require('./components/Student/controller')

module.exports = {

    // Courses Mutations
    createCourse: (_, { input }) => createOneCourse(input),

    editCourse: () => editOneCourse(),

    // Students Mutations
    createStudent: (_, { input }) => createOneStudent(input),

    editStudent: () => editOneStudent(),

}