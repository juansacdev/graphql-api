const {
    getAllCourses,
    getOneCourseById,
    createOneCourse,
} = require('./components/Course/controller')

module.exports = {

    Query: {

        hello: () => {
            return 123
        },

        saludo: () => {
            return 'Hola a todos desde GraphQL'
        },

        getCourses: () => getAllCourses(),

        getCourse: (_, { id }) => getOneCourseById(id),

    },

    Mutation: {

        createCourse: (_, { input }) => createOneCourse(input),

    },

}