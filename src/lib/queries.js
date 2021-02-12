// configuramos los Queries

const courses = require('./data')

module.exports = {
    getCourses: () => {
        return courses
    },
    getCourse: (root ,{ _id }) => {
        console.log(root, _id);
        return courses.find(course => course._id === _id)
    }
}