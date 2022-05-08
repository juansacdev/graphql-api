const { Schema, model } = require("mongoose");

const CourseSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},

		description: String,
		topic: String,
		level: {
			type: String,
			enum: ["Principiante", "Intermedio", "Avanzado"],
		},
		student: [
			{
				type: Schema.Types.ObjectId,
				ref: "Student",
			},
		],
		teacher: {
			type: Schema.Types.ObjectId,
			ref: "Teacher",
		},
	},
	{
		timestamps: true,
	},
);

module.exports = model("Course", CourseSchema);
