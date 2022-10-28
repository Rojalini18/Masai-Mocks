import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
export default function Hotel() {
  const [hotel, SetHotel] = useState([])

  const fetchData = async () => {

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
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Grid templateColumns='repeat(3, 1fr)' >
      {
        hotel.map((hotel) => {
          return <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            GridShadow={'2xl'}
            padding={4}>
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  hotel.image_url
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {hotel.category} Room
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                type of Room:  {hotel.type_of_room}
              </Text>
              <Text
                textAlign={'center'}
                px={3}>
                bed type: {hotel.bed_type}
              </Text>
              <Text
                textAlign={'center'}
                px={3}>
                capacity: {hotel.capacity}
              </Text>
              <Text
                textAlign={'center'}
                px={3}>
                cost: {hotel.cost}
              </Text>
              <Text
                textAlign={'center'}
                px={3}>
                No of persons: {hotel.no_of_persons}
              </Text>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Book Now
                </Button>
              </Stack>
            </Stack>
          </Stack>
        })
      }
    </Grid>
  );
}