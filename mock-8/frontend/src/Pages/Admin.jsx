import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,

  Stack,
  Button,
  Heading,

  useColorModeValue,

  Select,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Tfoot,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminregisterFunc } from '../Redux/auth/action';


export default function Admin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector((state) => state.auth)
  const [Inputdata, setInputdata] = useState({
    category: "",
    image_url: "",
    type_of_room: "",
    bed_type: "",
    capacity: "",
    cost: "",
    booked: false,

  })
  const [hotel, SetHotel] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputdata({ ...Inputdata, [name]: value, booked: true })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(adminregisterFunc(Inputdata))
      .then((res) => {
        if (res.type === "REGISTER_SUCCESS") {


          window.location.reload()
        }
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    let response = await fetch(`https://mock-8.herokuapp.com/web/hotelDetails`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

      })
    const data = await response.json()
    SetHotel(data)
    console.log(data);
  }

  console.log(hotel)

  const removeItem = (id) => {
    axios.delete(`https://mock-8.herokuapp.com/web/hotelDetails/${id}`).then((res) => {

      window.location.reload();
      console.log("del", res);
    })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <Box>


      <Flex

        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Admin Side
            </Heading>

          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={'28'}>
            <Stack spacing={2}>

              <Box>
                <FormControl id="category" isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select placeholder='category' name="category" onChange={handleChange}>
                    <option value='family'>family</option>
                    <option value='deluxe'>deluxe</option>
                    <option value='suite'>suite</option>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="image_url">
                  <FormLabel>Image of Room</FormLabel>
                  <Input type="text" name="image_url" onChange={handleChange} />
                </FormControl>
              </Box>

              <FormControl id="room" isRequired>
                <FormLabel>Type of room</FormLabel>
                <Select placeholder='Type of room' name="type_of_room" onChange={handleChange}>
                  <option value='AC'>AC</option>
                  <option value='NonAC'>NonAC</option>
                </Select>
              </FormControl>
              <FormControl id="bed" isRequired>
                <FormLabel>Bed type</FormLabel>
                <Select placeholder='Bed Type' name="bed_type" onChange={handleChange}>
                  <option value='single'>single</option>
                  <option value='Double'>Double</option>
                </Select>
              </FormControl>
              <FormControl id="adult" isRequired>
                <FormLabel>No of adults</FormLabel>
                <InputGroup>
                  <Input type="text" name="no_of_persons" onChange={handleChange} />

                </InputGroup>
              </FormControl>
              <FormControl id="adult" isRequired>
                <FormLabel>Max capacity</FormLabel>
                <InputGroup>
                  <Input type="text" name="capacity" onChange={handleChange} />

                </InputGroup>
              </FormControl>
              <FormControl id="adult" isRequired>
                <FormLabel>Cost per night in Rs</FormLabel>
                <InputGroup>
                  <Input type="text" name="cost" onChange={handleChange} />

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
                  Enter Hotel Details
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Hotel Details</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Category</Th>
              <Th >Type of room</Th>
              <Th >Bed type</Th>
              <Th >No of persons</Th>
              <Th >Capacity</Th>
              <Th >Cost</Th>
              <Th >Status (booked/not booked)</Th>
              <Th>Image</Th>
              <Th >Edit</Th>
              <Th >Delete</Th>
            </Tr>
          </Thead>
          {hotel.length > 0 && hotel.map((el) => {
            return <Tbody key={el.id}>
              <Tr>
                <Td>{el.id}</Td>
                <Td>{el.category}</Td>
                <Td >{el.type_of_room}</Td>
                <Td>{el.bed_type}</Td>
                <Td>{el.no_of_persons}</Td>
                <Td>{el.capacity}</Td>
                <Td>{el.cost}</Td>
                <Td>{el.booked.toString()}</Td>
                <Td><Image src={el.image_url} alt="hotel" width="150" height="150"></Image></Td>
                <Td><Button onClick={() => removeItem(el.id)}>Edit</Button></Td>
                <Td><Button onClick={() => removeItem(el.id)}>Delete</Button></Td>
              </Tr>
              <br />

            </Tbody>
          })
          }
        </Table>
      </TableContainer>

    </Box>
  );
}