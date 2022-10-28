import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import "../App.css";

const Map = (props) => {
  const {
    correct_answer,
    incorrect_answers,
    index,
    correct,
    setCorrect,
    incorrect,
    setIncorrect,
  } = props;
  console.log(incorrect_answers);
  const [QutionsNo, setQutionNo] = useState(0);
  const [AnsNo1, setAnsNo1] = useState(true);

  const Incorrect = () => {
    setAnsNo1(false);
    setIncorrect(incorrect + 1);
  };
  const Correct = () => {
    setAnsNo1(false);
    setCorrect(correct + 1);
  };
  if (index % 2 === 0) {
    return (
      <>
        {AnsNo1 === true ? (
          <div onClick={() => Correct()}>{correct_answer}</div>
        ) : (
          <div style={{ color: "green", backgroundColor: "rgb(96, 201, 96)" }}>
            {correct_answer}
          </div>
        )}
        <br></br>
        {AnsNo1 === true ? (
          <div onClick={() => Incorrect()}>{incorrect_answers[0]}</div>
        ) : (
          <div style={{ color: "red", backgroundColor: "rgb(220, 109, 109)" }}>
            {incorrect_answers[0]}
          </div>
        )}
        <br></br>
        {AnsNo1 === true ? (
          <div onClick={() => Incorrect()}>{incorrect_answers[1]}</div>
        ) : (
          <div style={{ color: "red", backgroundColor: "rgb(220, 109, 109)" }}>
            {incorrect_answers[1]}
          </div>
        )}
        <br></br>
        {AnsNo1 === true ? (
          <div onClick={() => Incorrect()}>{incorrect_answers[2]}</div>
        ) : (
          <div style={{ color: "red", backgroundColor: "rgb(220, 109, 109)" }}>
            {incorrect_answers[2]}
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {AnsNo1 === true ? (
          <div onClick={() => Incorrect()}>{incorrect_answers[0]}</div>
        ) : (
          <div style={{ color: "red", backgroundColor: "rgb(220, 109, 109)" }}>
            {incorrect_answers[0]}
          </div>
        )}
        <br></br>
        {AnsNo1 === true ? (
          <div onClick={() => Incorrect()}>{incorrect_answers[1]}</div>
        ) : (
          <div style={{ color: "red", backgroundColor: "rgb(220, 109, 109)" }}>
            {incorrect_answers[1]}
          </div>
        )}
        <br></br>
        {AnsNo1 === true ? (
          <div onClick={() => Correct()}>{correct_answer}</div>
        ) : (
          <div style={{ color: "green", backgroundColor: "rgb(96, 201, 96)" }}>
            {correct_answer}
          </div>
        )}
        <br></br>
        {AnsNo1 === true ? (
          <div onClick={() => Incorrect()}>{incorrect_answers[2]}</div>
        ) : (
          <div style={{ color: "red", backgroundColor: "rgb(220, 109, 109)" }}>
            {incorrect_answers[2]}
          </div>
        )}
      </>
    );
  }
};

export default Map;
