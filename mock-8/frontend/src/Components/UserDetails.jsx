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
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userloginFunc, userregisterFunc } from '../Redux/auth/action';

export default function UserDetails() {

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputdata, setInputdata] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputdata({ ...inputdata, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userregisterFunc(inputdata))
      .then((res) => {

        if (res.type === "LOGIN_SUCCESS") {
          alert("Registration success")
          navigate("/user")
        }
      })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(userloginFunc(inputdata))
      .then((res) => {

        if (res.type === "LOGIN_SUCCESS") {
          alert("Login success")
          navigate("/hotel")
        }
      })
  }
  return (

    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab>Login</Tab>
        <Tab>Registration</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>

          <Flex

            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" placeholder='Email Address' onChange={handleChange} />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" placeholder='password' onChange={handleChange} />
                  </FormControl>
                  <Stack spacing={10}>

                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }} onClick={handleLogin}>
                      Login
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </TabPanel>
        <TabPanel>

          <Flex

            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>

                  <Box>
                    <FormControl id="UserName" isRequired>
                      <FormLabel>UserName</FormLabel>
                      <Input type="text" name="username" placeholder='usename' onChange={handleChange} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="email">
                      <FormLabel>email</FormLabel>
                      <Input type="email" name="email" placeholder='Email Address' onChange={handleChange} />
                    </FormControl>
                  </Box>


                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input type={showPassword ? 'text' : 'password'} name="password" placeholder='password' onChange={handleChange} />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <FormControl id="repassword" isRequired>
                    <FormLabel>RenterPassword</FormLabel>
                    <InputGroup>
                      <Input type={showPassword ? 'text' : 'password'} name="repassword" placeholder='ReEnterpassword' onChange={handleChange} />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      onClick={handleSubmit}
                    >
                      Registration
                    </Button>
                  </Stack>

                </Stack>
              </Box>
            </Stack>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}