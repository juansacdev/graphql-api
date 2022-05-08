const {
	createOneCourse,
	editOneCourse,
	deleteOneCourse,
	addOneStudentToCourse,
	removeStudentFromOneCourse,
	addOneTeacherToCourse,
	removeTeacherFromOneCourse,
} = require("../components/Course/controller");

const {
	createOneStudent,
	editOneStudent,
	deleteOneStudent,
} = require("../components/Student/controller");

const {
	createOneTeacher,
	editOneTeacher,
	deleteOneTeacher,
} = require("../components/Teacher/controller");

module.exports = {
	// Courses Mutations
	createCourse: (_, { input }) => createOneCourse(input),
	editCourse: (_, { id, input }) => editOneCourse(id, input),
	deleteCourse: (_, { id }) => deleteOneCourse(id),

	addStudent: (_, { courseId, studentId }) =>
		addOneStudentToCourse(courseId, studentId),

	removeStudentFromCourse: (_, { courseId, studentId }) =>
		removeStudentFromOneCourse(courseId, studentId),

	addTeacher: (_, { courseId, teacherId }) =>
		addOneTeacherToCourse(courseId, teacherId),

	removeTeacherFromCourse: (_, { courseId, teacherId }) =>
		removeTeacherFromOneCourse(courseId, teacherId),

	// Students Mutations
	createStudent: (_, { input }) => createOneStudent(input),
	editStudent: (_, { id, input }) => editOneStudent(id, input),
	deleteStudent: (_, { id }) => deleteOneStudent(id),

	// Teachers Mutations
	createTeacher: (_, { input }) => createOneTeacher(input),
	editTeacher: (_, { id, input }) => editOneTeacher(id, input),
	deleteTeacher: (_, { id }) => deleteOneTeacher(id),
};
