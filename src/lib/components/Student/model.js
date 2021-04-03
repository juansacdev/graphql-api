const { Schema, model } = require("mongoose");

const StudentSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = model("Student", StudentSchema);
