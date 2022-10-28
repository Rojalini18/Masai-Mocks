import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { CreateStudents } from "../../Redux/Data Actions/DataActions";

const CreateStudent = () => {
  const [Details, setDetails] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({
      ...Details,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    dispatch(CreateStudents(Details, navigate, alert));
  };
  return (
    <Box>
      <FormControl
        width={"30%"}
        m={"auto"}
        mt={20}
        border=" solid grey"
        padding={5}
        borderRadius={5}
        pb="5"
      >
        <Box textAlign={"center"} fontSize="20px" fontWeight={"bold"}>
          Create Student
        </Box>
        <FormLabel pl={2} color="green">
          Name
        </FormLabel>
        <Input
          name="name"
          onChange={handleChange}
          type="taskname"
          placeholder="name"
        />
        <FormLabel pl={2} color="green">
          Age
        </FormLabel>
        <Input
          name="age"
          onChange={handleChange}
          placeholder="age"
          type={"text"}
        />
        <FormLabel pl={2} color="green">
          Gender
        </FormLabel>
        <Select placeholder="Gender" name="gender" onChange={handleChange}>
          <option value={"male"}>Male</option>
          <option value="female">Female</option>
        </Select>
        <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
    </Box>
  );
};

export default CreateStudent;
