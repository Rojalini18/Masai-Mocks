const { StudentModel } = require("../Models/Student.Model");

const StudentRegistration = async (name, age, gender) => {
  try {
    let randomNumber = Math.floor(Math.random() * 10000);
    let StudentData = {
      slot: randomNumber,
      name,
      age,
      gender,
      Tests: [],
    };
    const NewStudent = new StudentModel(StudentData);
    NewStudent.save();
    return { message: "student created", status: "success" };
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

const StudentData = async (Data) => {
  try {
    if (Data.gender) {
      if (Data.gender == "female") {
        let Student = await StudentModel.find({ gender: "female" });
        return {
          message: "filter data recieved",
          status: "success",
          data: Student,
        };
      } else {
        let Student = await StudentModel.find({ gender: "male" });
        return {
          message: "filter data recieved",
          status: "success",
          data: Student,
        };
      }
    } else if (Data.sorting) {
      if (Data.sorting == "ASE") {
        let Student = await StudentModel.find().sort({ age: 1 });
        return {
          message: "sorted data recieved",
          status: "success",
          data: Student,
        };
      } else {
        let Student = await StudentModel.find().sort({ age: -1 });
        return {
          message: "sorted data recieved",
          status: "success",
          data: Student,
        };
      }
    } else {
      let Student = await StudentModel.find();
      return {
        message: "student data recieved",
        status: "success",
        data: Student,
      };
    }
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

const TestDetailsOfStudent = async (slot) => {
  console.log(slot);
  try {
    const TestsData = await StudentModel.aggregate([
      { $match: { slot: slot } },
      {
        $lookup: {
          from: "test",
          localField: "Tests.TestId",
          foreignField: "id",
          as: "TestsData",
        },
      },
    ]);
    let TestsId = TestsData[0].Tests;
    let TestsDetails = TestsData[0].TestsData;
    let MainData = [];
    for (let i = 0; i < TestsDetails.length; i++) {
      for (let j = 0; j < TestsId.length; j++) {
        if (TestsId[j].TestsId.toString() === TestsDetails[i]._id.toString()) {
          MainData.push(TestsDetails[i]);
        }
      }
    }
    return {
      message: "tests gave successfully",
      status: "success",
      data: MainData,
    };
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

const DeleteStudent = async (id) => {
  try {
    await StudentModel.deleteOne({ _id: id });
    return { message: "student deleted succesfully", status: "success" };
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = {
  StudentRegistration,
  StudentData,
  TestDetailsOfStudent,
  DeleteStudent,
};
