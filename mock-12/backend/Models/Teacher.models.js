const { Schema, model } = require("mongoose");

const TeacherSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    gender: { type: String, require: true },
    mail: { type: String, require: true },
    password: { type: String, require: true },
  },
  { collection: "teacher" }
);

const TeacherModel = model("TeacherModel", TeacherSchema, "teacher");

module.exports = { TeacherModel };
