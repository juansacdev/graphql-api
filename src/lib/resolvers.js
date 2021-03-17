const courses = require('./data')

module.exports = {

    Query: {

        hello: () => {
            return 'Hola mundo con GraphQL'
        },

        saludo: () => {
            return 'Hola a todos desde GraphQL'
        },

        getCourses: () => {
            return courses
        },

        getCourse: (root, { id }) => {
            return courses.find(course => course._id === id)
        },

    }

}