const { Schema, model } = require("mongoose");

const TestSchema = new Schema(
  {
    test_name: { type: String, require: true },
    sub: { type: String, require: true },
    marks: { type: Number, require: true },
    date: { type: Number, require: true },
  },
  { collection: "test" }
);

const TestModel = model("passModel", TestSchema, "test");

module.exports = { TestModel };
