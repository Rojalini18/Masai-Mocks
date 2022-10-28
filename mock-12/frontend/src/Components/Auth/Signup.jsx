import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormHelperText,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Link as Routers, useNavigate } from "react-router-dom";
import { TeacherRegistration } from "../../Redux/Auth Actions/AuthActions";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({});
  console.log(input);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  var isName;
  if (input.name) {
    isName = input.name === "";
  } else {
    isName = true;
  }

  var isPass;
  if (input.password) {
    isPass = input.password === "";
  } else {
    isPass = true;
  }
  var isAge;
  if (input.age) {
    isAge = input.age === "";
  } else {
    isAge = true;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!isName && !isPass && !isAge) {
      dispatch(TeacherRegistration(input, alert, navigate));
    } else {
      alert.error("Please Provide All Details");
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={0} mx={"auto"} maxW={"lg"} py={12} px={6} w="80%">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}></Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={1}>
            <Box>
              <FormControl id="name" isInvalid={isName}>
                <FormLabel>Name</FormLabel>
                <Input type="name" onChange={handleChange} name="name" />
                {!isName ? (
                  <FormHelperText>Enter Your Name.</FormHelperText>
                ) : (
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <FormControl id="age" isInvalid={isAge}>
              <FormLabel>Age</FormLabel>
              <Input type="age" onChange={handleChange} name="age" />
              {!isAge ? (
                <FormHelperText>Enter Your Age.</FormHelperText>
              ) : (
                <FormErrorMessage>Age is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="gender">
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="status"
                name="gender"
                onChange={handleChange}
              >
                <option value={"male"}>Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl id="email" isInvalid={isPass}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleChange} name="mail" />
              {!isPass ? (
                <FormHelperText>Enter Your email .</FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={isPass}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  name="password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {!isName ? (
                <FormHelperText>Enter Your Name.</FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Routers to="/login" color={"red"}>
                  <Text color={"blue.400"}>Login</Text>
                </Routers>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
