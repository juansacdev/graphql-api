const {
	createOneCourse,
	editOneCourse,
	deleteOneCourse,
	addOnePersonToCourse,
	removePersonFromOneCourse,
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

	addPerson: (_, { courseId, personId }) =>
		addOnePersonToCourse(courseId, personId),

	removePersonFromCourse: (_, { courseId, personId }) =>
		removePersonFromOneCourse(courseId, personId),

	// Students Mutations
	createStudent: (_, { input }) => createOneStudent(input),

	editStudent: (_, { id, input }) => editOneStudent(id, input),

	deleteStudent: (_, { id }) => deleteOneStudent(id),
};
