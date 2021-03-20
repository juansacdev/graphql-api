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

    editCourse: (_, { id, input }) => editOneCourse(id, input),

    // Students Mutations
    createStudent: (_, { input }) => createOneStudent(input),

    editStudent: (_, { id, input }) => editOneStudent(id, input),

}