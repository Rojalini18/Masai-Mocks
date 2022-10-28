import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteStudent, GetData } from "../../Redux/Data Actions/DataActions";
import "./Main.css";
import { Box, Center, Text, Button, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SocialProfileWithImage() {
  let Data = useSelector((state) => state.Details.StudentData);
  console.log(Data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (Id) => {
    console.log(Id);
    dispatch(DeleteStudent(Id));
  };
  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);
  return (
    <>
      <Button onClick={() => navigate("/create/student")}>
        Create Student
      </Button>
      <Center py={6}>
        <Grid display="grid" gridTemplateColumns="repeat(3,1fr)" pb={100}>
          {Data.map((el) => (
            <Box className="main">
              <AllData
                Id={el._id}
                Slot={el.slot}
                Name={el.name}
                Age={el.age}
                Gender={el.gender}
                handleDelete={handleDelete}
              />
            </Box>
          ))}
        </Grid>
      </Center>
    </>
  );
}

function AllData({ Id, Slot, Name, Age, Gender, handleDelete }) {
  return (
    <Box className="mainContainer">
      <Box
        className="box"
        fontSize={20}
        fontWeight="bold"
        color={"navy"}
        p={"10px"}
      >
        <Text>Slot : - {Slot}</Text>
        <br />
        <Text>Name:- {Name}</Text>
        <br />
        <Text>Age :-{Age}</Text>
        <br />
        <Text> Gender:-{Gender}</Text>
        <br />
        <Box display={"flex"}>
          <Button background={"pink"} mr="10px">
            View Tests
          </Button>
          <Button background={"pink"} onClick={() => handleDelete(Id)}>
            Delete Student
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
