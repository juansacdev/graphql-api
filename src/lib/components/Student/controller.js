const Student = require("./model");
const errorHandler = require("../../../errorHandler");

// Busca y devuelve todos los elementos
const getAllStudents = () => Student.find();

// Busca por ID y devuelve el elemento que haga matche
const getOneStudentById = (id) => Student.findById(id);

// Crea un estudiante
const createOneStudent = async (input) => {
	try {
		const student = new Student(input);
		await student.save();
		return student;
	} catch (error) {
		errorHandler(error);
	}
};

// Edita un estudiante
const editOneStudent = async (id, input) => {
	try {
		const studentEdited = await Student.findByIdAndUpdate(id, input, {
			new: true,
		});

		await studentEdited.save();
		return studentEdited;
	} catch (error) {
		errorHandler(error);
	}
};

// Elimina un estudiante
const deleteOneStudent = (id) => Student.findByIdAndDelete(id);

module.exports = {
	getAllStudents,
	getOneStudentById,
	createOneStudent,
	editOneStudent,
	deleteOneStudent,
};
