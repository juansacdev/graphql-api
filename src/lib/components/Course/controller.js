const Course = require("./model");
const Student = require("../Student/model");
const errorHandler = require("../../../errorHandler");

// Busca y devuelve todos los elementos
const getAllCourses = () => {
	try {
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
	} catch (error) {
		errorHandler(error);
	}
};

// Busca por ID y devuelve el elemento que haga matche
const getOneCourseById = async (id) => {
	try {
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
	} catch (error) {
		errorHandler(error);
	}
};

// Crea un curso
const createOneCourse = async (input) => {
	try {
		const defaults = {
			description: "",
			topic: "",
		};

		const fulldata = { ...defaults, ...input };

		const course = new Course(fulldata);

		await course.save();
		return course;
	} catch (error) {
		errorHandler(error);
	}
};

// Edita un curso
const editOneCourse = async (id, input) => {
	try {
		const courseEdited = await Course.findByIdAndUpdate(id, input, {
			new: true,
		});
		await courseEdited.save();
		return courseEdited;
	} catch (error) {
		errorHandler(error);
	}
};

// Elimina un curso
const deleteOneCourse = async (id) => await Course.findByIdAndDelete(id);

// Agrega una persona a un curso
const addOnePersonToCourse = (courseId, personId) => {
	return new Promise(async (resolve, reject) => {
		try {
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
						return false;
					}
					resolve(person);
				});
		} catch (error) {
			errorHandler(error);
		}
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
