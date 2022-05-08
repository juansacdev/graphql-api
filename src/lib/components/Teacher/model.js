const { Schema, model } = require("mongoose");

const TeacherSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},

		age: Number,
	},
	{
		timestamps: true,
	},
);

module.exports = model("Teacher", TeacherSchema);
