const Course = require("./model")

// Busca y devuelve todos los elementos
const getAllCourses = () => Course.find()

// Busca por ID y devuelve el elemento que haga matche
const getOneCourseById = id => Course.findById( id )

// Crea un curso
const createOneCourse = async ( input ) => {

    const defaults = {
        description: '',
        topic: '',
    }

    const fulldata = {...defaults, ...input }

    const course = new Course(fulldata)

    await course.save()
    return course

}

// Edita un curso
const editOneCourse = async (id, input) => {

    const courseEdited = await Course.findByIdAndUpdate(
        id, input, {
            new: true,
        }
    )
    await courseEdited.save()
    return courseEdited

}

module.exports ={
    getAllCourses,
    getOneCourseById,
    createOneCourse,
    editOneCourse,
}