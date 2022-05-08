module.exports = {
	Person: {
		__resolveType: (person, contex, info) => {
			if (person.age) {
				return "Teacher";
			}
			return "Student";
		},
	},
};
