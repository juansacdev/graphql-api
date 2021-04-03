const Course = require("./model");
const Student = require("../Student/model");

// Busca y devuelve todos los elementos
const getAllCourses = () => {
	return new Promise((resolve, reject) => {
		Course.find()
			.populate("person")
			.exec((error, person) => {
				if (error) {
					reject(error);
					return false;
				}
				resolve(person);
			});
	});
};

// Busca por ID y devuelve el elemento que haga matche
const getOneCourseById = async (id) => {
	return new Promise((resolve, reject) => {
		Course.findById(id)
			.populate("person")
			.exec((error, person) => {
				if (error) {
					reject(error);
					return false;
				}
				resolve(person);
			});
	});
};

// Crea un curso
const createOneCourse = async (input) => {
	const defaults = {
		description: "",
		topic: "",
	};

	const fulldata = { ...defaults, ...input };

	const course = new Course(fulldata);

	await course.save();
	return course;
};

// Edita un curso
const editOneCourse = async (id, input) => {
	const courseEdited = await Course.findByIdAndUpdate(id, input, {
		new: true,
	});
	await courseEdited.save();
	return courseEdited;
};

// Elimina un curso
const deleteOneCourse = async (id) => await Course.findByIdAndDelete(id);

// Agrega una persona a un curso
const addOnePersonToCourse = (courseId, personId) => {
	return new Promise(async (resolve, reject) => {
		const course = Course.findById(courseId);
		const person = Student.findById(personId);

		if (!course || !person) {
			reject("El curso o la persona no encontrado");
		}

		const courseUpdated = await Course.findByIdAndUpdate(
			courseId,
			{
				$addToSet: {
					person: personId,
				},
			},
			{ new: true },
		);

		await courseUpdated.save();

		Course.findById(courseId)
			.populate("person")
			.exec((error, person) => {
				if (error) {
					reject(error);
					return false
				}
				resolve(person);
			});
	});
};

module.exports = {
	getAllCourses,
	getOneCourseById,
	createOneCourse,
	editOneCourse,
	deleteOneCourse,
	addOnePersonToCourse,
};
