import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import Map from "../component/Map";
import { Result } from "../../src/Redux/action";
import "../App.css";
let infodata = JSON.parse(localStorage.getItem("user"));

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data.data);
  const [count, setcount] = useState(data.length - 1);
  const [QutionsNo, setQutionNo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  console.log(data);
  let res = {
    name: infodata.name,
    category: infodata.category,
    difficulty: infodata.difficulty,
    noofquestion: infodata.numberOfQuestions,
    correct: correct,
    incorrect: incorrect,
  };

  console.log("res", res);
  async function getData() {
    try {
      let response = await fetch(`https://mock-14.herokuapp.com/web/info`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: res.name,
          category: res.category,
          difficulty: res.difficulty,
          noofquestion: res.noofquestion,
          correct: res.correct,
          incorrect: res.incorrect,
        }),
      });
      const data = await response.json();
      console.log("infodata", data);
    } catch (e) {
      alert(e);
    }
  }

  const yourResult = () => {
    console.log(correct);
    console.log(incorrect);
    dispatch(Result(correct, incorrect));
    getData();
    navigate("/results");
  };
  return (
    <>
      <div
        style={{ margin: "auto", justifyContent: "center", width: "60%" }}
      ></div>
      <div style={{ textAlign: "center" }}>Quiz Has Started</div>
      {data.map(function (elem, index) {
        return (
          <>
            {QutionsNo == index ? (
              <div id="mapqutions">
                <div>
                  <p>
                    {index + 1} {elem.question}
                  </p>
                  <br></br>
                  <Map
                    key={index}
                    correct_answer={elem.correct_answer}
                    incorrect_answers={elem.incorrect_answers}
                    index={index}
                    correct={correct}
                    setCorrect={setCorrect}
                    incorrect={incorrect}
                    setIncorrect={setIncorrect}
                  />
                  <br></br>
                  {index !== count ? (
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => setQutionNo(index + 1)}
                    >
                      Next Question
                    </Button>
                  ) : (
                    <Button
                      onClick={() => yourResult()}
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
};

export default Quiz;
