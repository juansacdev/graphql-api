const Teacher = require("./model");
const errorHandler = require("../../../errorHandler");

// Busca y devuelve todos los elementos
const getAllTeachers = () => Teacher.find();

// Busca por ID y devuelve el elemento que haga matche
const getOneTeacherById = (id) => Teacher.findById(id);

// Crea un estudiante
const createOneTeacher = async (input) => {
	try {
		const teacher = new Teacher(input);
		await teacher.save();
		return teacher;
	} catch (error) {
		errorHandler(error);
	}
};

// Edita un estudiante
const editOneTeacher = async (id, input) => {
	try {
		const teacherEdited = await Teacher.findByIdAndUpdate(id, input, {
			new: true,
		});

		await teacherEdited.save();
		return teacherEdited;
	} catch (error) {
		errorHandler(error);
	}
};

// Elimina un estudiante
const deleteOneTeacher = (id) => Teacher.findByIdAndDelete(id);

module.exports = {
	getAllTeachers,
	getOneTeacherById,
	createOneTeacher,
	editOneTeacher,
	deleteOneTeacher,
};
