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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Link as Rout, useNavigate } from "react-router-dom";
import { UserLogin } from "../../Redux/Auth Actions/AuthActions";
export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  //mail validation
  var isMail;
  if (input.mail) {
    isMail = input.mail === "";
  } else {
    isMail = true;
  }
  //password Validation
  var isPass;
  if (input.password) {
    isPass = input.mail === "";
  } else {
    isPass = true;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(UserLogin(input, alert, navigate));
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
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            {/* to enjoy all of our cool features ✌️ */}
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={1}>
            <FormControl id="email" isInvalid={isMail}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleChange} name="mail" />
              {!isMail ? (
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
              {!isPass ? (
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
                New user?{" "}
                <Rout to={"/signup"} color={"blue"}>
                  <Text color="blue.400">Signp</Text>
                </Rout>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
