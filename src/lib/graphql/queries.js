const {
	getAllCourses,
	getOneCourseById,
} = require("../components/Course/controller");

const {
	getAllStudents,
	getOneStudentById,
} = require("../components/Student/controller");

const {
	getAllTeachers,
	getOneTeacherById,
} = require("../components/Teacher/controller");

module.exports = {
	// Courses Queries
	getCourses: () => getAllCourses(),
	getCourse: (_, { id }) => getOneCourseById(id),

	// Students Queries
	getStudents: () => getAllStudents(),
	getStudent: (_, { id }) => getOneStudentById(id),

	// Teacher Queries
	getTeachers: () => getAllTeachers(),
	getTeacher: (_, { id }) => getOneTeacherById(id),
};
