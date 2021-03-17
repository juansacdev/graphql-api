const courses = require('./data')

module.exports = {

    hello: () => {
        return 'Hola mundo con GraphQL'
    },

    saludo: () => {
        return 'Hola a todos desde GraphQL'
    },

    getCourses: () => {
        return courses
    }
}