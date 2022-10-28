const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const { TeacherRouter } = require("./Routes/Teacher.Routes");
const { StudentRouter } = require("./Routes/Student.Routes");
const { TestRouter } = require("./Routes/Test.Routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
    sameSite: "none",
    optionSuccessStatus: 200,
  })
);

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "thisismysecrctekey",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(req.session.user);
});
app.use("/", TeacherRouter);
app.use("/student", StudentRouter);
app.use("/tests", TestRouter);

const PORT = process.env.PORT;
const mongoDB = process.env.MongoAtlas;

app.listen(PORT, () => {
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db successfully");
    })
    .catch((err) => {
      console.log("Falied connection");
    });
  console.log(`Listening on port ${PORT}`);
});
