const Router = require("express");
const TeacherRouter = Router();

const {
  TeacherRegistration,
  TeacherLogin,
} = require("../Controllers/Teacher.Controller");

TeacherRouter.post("/signup", async (req, res) => {
  let { name, age, gender, mail, password } = req.body;
  console.log(name, age, gender, mail, password);
  if (password.length) {
    return res
      .status(404)
      .send({
        message: "password length should be mothan 8 characters",
        status: "error",
      });
  }
  const { message, status } = await TeacherRegistration(
    name,
    age,
    gender,
    mail,
    password
  );
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status });
  } else {
    return res.status(200).send({ message, status });
  }
});

TeacherRouter.post("/login", async (req, res) => {
  let { mail, password } = req.body;
  const { message, status, token, refreshToken, name } = await TeacherLogin(
    mail,
    password
  );
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    req.session.user = { token, refreshToken, mail };
    return res.status(200).send({ message, status, token, refreshToken, name });
  } else {
    return res.status(200).send({ message, status });
  }
});

TeacherRouter.get("/logout", async (req, res) => {
  try {
    req.session.user = "";
    return res
      .status(200)
      .send({ message: "logout success", status: "success" });
  } catch (error) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});

module.exports = { TeacherRouter };
