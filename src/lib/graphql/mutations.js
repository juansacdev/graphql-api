const {
	createOneCourse,
	editOneCourse,
	deleteOneCourse,
} = require("../components/Course/controller");

const {
	createOneStudent,
	editOneStudent,
	deleteOneStudent,
} = require("../components/Student/controller");

module.exports = {
	// Courses Mutations
	createCourse: (_, { input }) => createOneCourse(input),

	editCourse: (_, { id, input }) => editOneCourse(id, input),

	deleteCourse: (_, { id }) => deleteOneCourse(id),

	// Students Mutations
	createStudent: (_, { input }) => createOneStudent(input),

	editStudent: (_, { id, input }) => editOneStudent(id, input),

	deleteStudent: (_, { id }) => deleteOneStudent(id),
};
