const Router = require("express");
const {
  TestSuggestion,
  DeleteTest,
} = require("../Controllers/Test.Controller");
const TestRouter = Router();

TestRouter.post("/create", async (req, res) => {
  let { test_name, sub, marks, date, id } = req.body;

  const { message, status } = await TestSuggestion(test_name, sub, marks, date, id);
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status });
  } else {
    return res.status(200).send({ message, status });
  }
});

TestRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status } = await DeleteTest(id);
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "success") {
    return res.status(200).send({ message, status, data });
  } else {
    return res.status(200).send({ message, status });
  }
});

module.exports = { TestRouter };
