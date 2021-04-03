const {
	getAllCourses,
	getOneCourseById,
} = require("./components/Course/controller");

const {
	getAllStudents,
	getOneStudentById,
} = require("./components/Student/controller");

module.exports = {
	// Courses Queries
	getCourses: () => getAllCourses(),

	getCourse: (_, { id }) => getOneCourseById(id),

	// Students Queries
	getStudents: () => getAllStudents(),

	getStudent: (_, { id }) => getOneStudentById(id),
};
