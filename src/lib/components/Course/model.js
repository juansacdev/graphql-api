const { Schema, model } = require('mongoose')

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    description: String,
    topic: String,
})

module.exports = model('Course', CourseSchema)