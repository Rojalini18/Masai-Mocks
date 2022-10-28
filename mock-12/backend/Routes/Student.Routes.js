const Router = require("express");
const {
  StudentRegistration,
  StudentData,
  TestDetailsOfStudent,
  DeleteStudent,
} = require("../Controllers/Student.Controller");
StudentRouter = Router();

StudentRouter.post("/create", async (req, res) => {
  let { name, age, gender } = req.body;

  const { message, status } = await StudentRegistration(name, age, gender);
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status });
  } else {
    return res.status(200).send({ message, status });
  }
});

StudentRouter.post("/get", async (req, res) => {
  let { gender, sorting } = req.body;
  const { message, status, data } = await StudentData({ gender, sorting });
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status, data });
  } else {
    return res.status(200).send({ message, status });
  }
});

StudentRouter.post("/tests/get", async (req, res) => {
  let { slot } = req.body;
  const { message, status, data } = await TestDetailsOfStudent(slot);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  if (status === "success") {
    return res.status(200).send({ message, status, data });
  } else {
    return res.status(200).send({ message, status });
  }
});

StudentRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status } = await DeleteStudent(id);
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status, data });
  } else {
    return res.status(200).send({ message, status });
  }
});

module.exports = { StudentRouter };
