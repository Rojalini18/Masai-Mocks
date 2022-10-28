const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const { TeacherModel } = require("../Models/Teacher.models");

const TeacherRegistration = async (name, age, gender, mail, password) => {
  console.log(mail);
  try {
    let teacher = await TeacherModel.find({ mail });
    if (teacher.length > 0) {
      return { message: "user already exists", status: "exists" };
    } else {
      let TeacherData = {
        name,
        age,
        gender,
        mail,
        password,
      };
      const NewTeacher = new TeacherModel(TeacherData);
      NewTeacher.save();
      return { message: "user created", status: "success" };
    }
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

const TeacherLogin = async (mail, password) => {
  let secret1 = process.env.SECRET1hr;
  let secret2 = process.env.SECRET1hr;
  try {
    let Teacher = await TeacherModel.find({ mail });
    if (Teacher.length == 0) {
      return { message: "New User", status: "new" };
    } else {
      if (Teacher[0].mail === mail && Teacher[0].password === password) {
        const token = jwt.sign(
          { email: Teacher[0]?.mail, password: Teacher[0]?.password },
          secret1,
          {
            expiresIn: "1hr",
          }
        );
        const refreshToken = jwt.sign(
          { email: Teacher[0]?.mail, password: Teacher[0]?.password },
          secret2,
          {
            expiresIn: "7d",
          }
        );
        return {
          message: "login success",
          status: "success",
          token,
          refreshToken,
          name: Teacher[0].name,
        };
      } else if (Teacher[0].mail === mail && Teacher[0].password !== password) {
        return { message: "Invalid Credentials", status: "failed" };
      }
    }
  } catch (error) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { TeacherRegistration, TeacherLogin };
