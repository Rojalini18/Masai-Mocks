import React, { useState } from "react";
import "./Home.css";

import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { getDataLoading } from ".././Redux/action";
import { useSelector, useDispatch } from "react-redux";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log("hello",user);
    localStorage.setItem('user', JSON.stringify(user))
    let c;
    if (user.category == "General Knowledge") {
      c = 12;
    } else if (user.category == "Sports") {
      c = 21;
    } else {
      c = 9;
    }
    const getData = (c) => {
      fetch(
        `https://opentdb.com/api.php?amount=${user.numberOfQuestions}&category=${c}&difficulty=${user.difficulty}&type=multiple`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          dispatch(getDataLoading(res.results));

          navigate("/quiz");
        })
        .catch((err) => alert("error"));
    };
    getData(c);
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Take your Quiz...</Typography>
        <InputLabel>Category</InputLabel>
        <select
          type="text"
          onChange={(e) => handleChange(e)}
          name="category"
          required
        >
          <option value=""></option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Sports">Sports</option>
          <option value="Geography">Geography</option>
        </select>
        <FormControl>
          <InputLabel>Enter Your Name</InputLabel>
          <Input
            onChange={(e) => handleChange(e)}
            type="string"
            name="name"
          />
        </FormControl>
        <FormControl>
          <InputLabel>Number Of Questions</InputLabel>
          <Input
            onChange={handleChange}
            type="number"
            name="numberOfQuestions"
          />
        </FormControl>
        <FormGroup>
          <Typography variant="h4">Difficulty</Typography>
          <FormControlLabel
            control={
              <Checkbox
                value="easy"
                onChange={handleChange}
                name="difficulty"
              />
            }
            label="Easy"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="medium"
                onChange={handleChange}
                name="difficulty"
              />
            }
            label="Medium"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="hard"
                onChange={handleChange}
                name="difficulty"
              />
            }
            label="Hard"
          />
        </FormGroup>
        <FormControl>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            START
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Home;
