const { Schema, model } = require("mongoose");

const CourseSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},

		teacher: {
			type: String,
			required: true,
		},

		description: String,
		topic: String,
		person: [{
			type: Schema.Types.ObjectId,
			ref: "Student",
		}],
	},
	{
		timestamps: true,
	},
);

module.exports = model("Course", CourseSchema);
