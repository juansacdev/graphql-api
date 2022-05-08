const Course = require("./model");
const Student = require("../Student/model");
const Teacher = require("../Teacher/model");

const errorHandler = require("../../../errorHandler");

// Busca y devuelve todos los elementos
const getAllCourses = () => {
	try {
		return new Promise((resolve, reject) => {
			Course.find()
				.populate("student")
				.populate("teacher")
				.exec((error, data) => {
					if (error) {
						reject(error);
						return false;
					}
					resolve(data);
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
				.populate("student")
				.populate("teacher")
				.exec((error, data) => {
					if (error) {
						reject(error);
						return false;
					}
					resolve(data);
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

// Agrega un estudiante a un curso
const addOneStudentToCourse = (courseId, studentId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const course = Course.findById(courseId);
			const student = Student.findById(studentId);

			if (!course || !student) {
				reject("El curso o el estudiante no encontrado");
			}

			const courseUpdated = await Course.findByIdAndUpdate(
				courseId,
				{
					$addToSet: {
						student: studentId,
					},
				},
				{ new: true },
			);

			await courseUpdated.save();

			Course.findById(courseId)
				.populate("student")
				.populate("teacher")
				.exec((error, data) => {
					if (error) {
						reject(error);
						return false;
					}
					resolve(data);
				});
		} catch (error) {
			errorHandler(error);
		}
	});
};

// Elimina un estudiante de un curso
const removeStudentFromOneCourse = (courseId, studentId) => {
	return new Promise(async (resolve, reject) => {
		const course = Course.findById(courseId);
		const student = Student.findById(studentId);

		if (!course || !student) {
			reject("El curso o el estudiante no encontrado");
			return false;
		}

		const courseUpdated = await Course.findByIdAndUpdate(
			courseId,
			{
				$pull: { student: studentId },
			},
			{
				new: true,
			},
		);

		await courseUpdated.save();

		Course.findById(courseId)
			.populate("student")
			.populate("teacher")
			.exec((error, data) => {
				if (error) {
					reject(error);
					return false;
				}
				resolve(data);
			});
	});
};

// Agrega un profesor a un curso
const addOneTeacherToCourse = (courseId, teacherId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const course = Course.findById(courseId);
			const teacher = Teacher.findById(teacherId);

			if (!course || !teacher) {
				reject("El curso o el estudiante no encontrado");
			}

			const courseUpdated = await Course.findByIdAndUpdate(
				courseId,
				{
					$set: {
						teacher: teacherId,
					},
				},
				{ new: true },
			);

			await courseUpdated.save();

			Course.findById(courseId)
				.populate("teacher")
				.populate("student")
				.exec((error, data) => {
					if (error) {
						reject(error);
						return false;
					}
					resolve(data);
				});
		} catch (error) {
			errorHandler(error);
		}
	});
};

// Elimina un profesor de un curso
const removeTeacherFromOneCourse = (courseId, teacherId) => {
	return new Promise(async (resolve, reject) => {
		const course = Course.findById(courseId);
		const teacher = Teacher.findById(teacherId);

		if (!course || !teacher) {
			reject("El curso o el profesor no encontrado");
			return false;
		}

		const courseUpdated = await Course.findByIdAndUpdate(
			courseId,
			{
				$unset: {
					teacher: "",
				},
			},
			{
				new: true,
			},
		);

		await courseUpdated.save();

		Course.findById(courseId)
			.populate("teacher")
			.populate("student")
			.exec((error, data) => {
				if (error) {
					reject(error);
					return false;
				}
				resolve(data);
			});
	});
};

module.exports = {
	getAllCourses,
	getOneCourseById,
	createOneCourse,
	editOneCourse,
	deleteOneCourse,
	addOneStudentToCourse,
	removeStudentFromOneCourse,
	addOneTeacherToCourse,
	removeTeacherFromOneCourse,
};
