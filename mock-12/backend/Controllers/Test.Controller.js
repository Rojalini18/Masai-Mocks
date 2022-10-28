const { TestModel } = require("../Models/Tests.Modal");
const { StudentModel } = require("../Models/Student.Model");

const TestSuggestion = async (test_name, sub, marks, date,id) => {
  try {
    let Tests = {
      test_name,
      sub,
      marks,
      date,
      
    };
    const NewTests = new TestModel(Tests);
    NewTests.save();
    await StudentModel.updateOne(
      { _id: id },
      { $push: { Tests: { TestId: NewTests._id } } }
    );
    return { message: "Student Tests Updated", status: "success" };
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

const DeleteTest = async (id) => {
  try {
    await TestModel.deleteOne({ _id: id });
    return { message: "student deleted succesfully", status: "success" };
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { TestSuggestion, DeleteTest };
