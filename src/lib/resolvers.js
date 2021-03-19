const Course = require("./models/Course")

module.exports = {

    Query: {

        hello: () => {
            return 'Hola mundo con GraphQL'
        },

        saludo: () => {
            return 'Hola a todos desde GraphQL'
        },

        getCourses: () => Course.find(),

        getCourse: (root, { id }) => Course.findById(id),

    }

}