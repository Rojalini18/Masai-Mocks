import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  SimpleGrid,
  Heading,
  Image,
} from '@chakra-ui/react';

const Cart = () => {
  var addToCart = JSON.parse(localStorage.getItem('addToCart')) || [];
  return (
    <div>
      <Box>
        <SimpleGrid templateColumns="repeat(3, 1fr)">
          {addToCart.map((el, index) => {
            return (
              <Stack
                key={el.id}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                GridShadow={'2xl'}
                padding={4}
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={el.image} />
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Name: {el.name}
                  </Heading>
                  <Text textAlign={'center'} px={3}>
                    Type: {el.type}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    Rating:{el.rating}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    Vote:{el.number_of_votes}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    Price: {el.price_starts_from}
                  </Text>
                  <Stack
                    width={'100%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  ></Stack>
                </Stack>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Cart;
