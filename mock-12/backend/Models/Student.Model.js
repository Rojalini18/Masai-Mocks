const { Schema, model } = require("mongoose");

const StudentSchema = new Schema(
  {
    slot: { type: Number, require: true },
    name: { type: String, require: true },
    age: { type: Number, require: true },
    gender: { type: String, require: true },
    Tests: [
      {
        TestId: Schema.Types.ObjectId,
      },
    ],
  },
  { collection: "student" }
);

const StudentModel = model("StudentModel", StudentSchema, "student");

module.exports = { StudentModel };
