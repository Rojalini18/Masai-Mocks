import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  let log = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  let name = localStorage.getItem("name");
  useEffect(() => {
    if (!log) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [log, isLogin, name]);

  return (
    <Box
      height={"20"}
      width="100%"
      margin={"auto"}
      marginTop="5"
      background={"#793ead"}
      borderRadius={"10"}
    >
      <Flex justifyContent={"space-around"} padding={"7"} color="azure">
        <Link to="/">Home</Link>
        {!isLogin ? (
          <Text fontSize={20} fontWeight="bold">
            {name}
          </Text>
        ) : (
          "Welcome"
        )}
        {log ? (
          <Text onClick={handleLogout} cursor="pointer">
            Logout
          </Text>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </Flex>
    </Box>
  );
};
