const { Schema, model } = require('mongoose')

const StudentSchema = new Schema({
    title: {type: String, required: true},
    teacher: {type: String, required: true},
    description: {type: String},
    topic: {type: String},
})

module.exports = model('Student', StudentSchema)
