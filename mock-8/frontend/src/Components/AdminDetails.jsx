import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminloginFunc } from '../Redux/auth/action'


export default function AdminDetails() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputdata, setInputdata] = useState({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputdata({ ...inputdata, [name]: value })

  }
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    dispatch(adminloginFunc(inputdata))
      .then((res) => {

        if (res.type === "LOGIN_SUCCESS") {
          navigate("/admin")
        }
      })
  }


  return (
    <Flex

      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Admin Login</Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input type="email" name="username" placeholder='Email Address' onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" placeholder='password' onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}
                onClick={handleLoginSubmit}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}