import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCard from "../Components/Auth/Login";
import SignupCard from "../Components/Auth/Signup";
import SplitScreen from "../Components/Home";
import Main from "../Components/Main/Main";
import { Navbar } from "../Components/Navbar/Navbar";
import CreateStudent from "../Components/Pages/CreateStudent";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginCard />}></Route>
        <Route path="/signup" element={<SignupCard />}></Route>
        <Route path="/" element={<SplitScreen />}></Route>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/create/student" element={<CreateStudent />}></Route>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
