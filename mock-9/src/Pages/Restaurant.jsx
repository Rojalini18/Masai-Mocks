import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  SimpleGrid,
  Heading,
  Image,
  Select,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Restaurant() {
  const { isOpen, onToggle } = useDisclosure();
  const [myData, setmyData] = useState([]);
  const [page, setPage] = useState(1);
  var cart = [];

  const next = () => {
    console.log('next');
    setPage(page + 1);
    getData();
    if (page > 20) alert('last page');
  };

  const prev = () => {
    setPage(page - 1);
    getData();
    if (page < 1) alert('fist page');
  };

  const getData = () => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?${page}&limit=10`
      )
      .then(res => {
        console.log(res.data.data);
        setmyData(res.data.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSorting = value => {
    if (value === 'htl') {
      const HightToLow = myData.sort((a, b) => {
        return b.rating - a.rating;
      });
      setmyData([...HightToLow]);
    } else {
      const lowToHigh = myData.sort((a, b) => {
        return a.rating - b.rating;
      });
      setmyData([...lowToHigh]);
    }
  };

  const handlePriceSorting = value => {
    if (value === 'htl') {
      const HightToLow = myData.sort((a, b) => {
        return b.price_starts_from - a.price_starts_from;
      });
      setmyData([...HightToLow]);
    } else {
      const lowToHigh = myData.sort((a, b) => {
        return a.price_starts_from - b.price_starts_from;
      });
      setmyData([...lowToHigh]);
    }
  };

  const handleFiltering = value => {
    if (value === 'fine_dining') {
      var filteredData1 = myData.filter(item => {
        return item.type === value;
      });
      setmyData(filteredData1);
      console.log('filteredData1', filteredData1);
    }
    if (value === 'casual_dining') {
      var filteredData2 = myData.filter(item => {
        return item.type === value;
      });
      setmyData(filteredData2);
      console.log('filteredData2', filteredData2);
    }
    if (value === 'fast_food') {
      var filteredData3 = myData.filter(item => {
        return item.type === value;
      });
      setmyData(filteredData3);
      console.log('filteredData3', filteredData3);
    }
    if (value === 'cafe') {
      var filteredData4 = myData.filter(item => {
        return item.type === value;
      });
      setmyData(filteredData4);
      console.log('filteredData4', filteredData4);
    }
    if (value === 'fine_dining') {
      var filteredData5 = myData.filter(item => {
        return item.type === value;
      });
      setmyData(filteredData5);
      console.log('filteredData5', filteredData5);
    }
    if (value === 'ethnic') {
      var filteredData6 = myData.filter(item => {
        return item.type === value;
      });
      setmyData(filteredData6);
      console.log('filteredData6', filteredData6);
    }
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <RouterLink to={'/restaurant'}>
            <Text
              ml={10}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              Restaurant
            </Text>
          </RouterLink>
          <RouterLink to={'/cart'}>
            <Text
              ml={10}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              Cart
            </Text>
          </RouterLink>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
      <Box>
        <Stack
          direction="row"
          align="center"
          justifyContent="center"
          mt="5px"
          mb="5px"
        >
          <Button colorScheme="blue" variant="solid" onClick={prev}>
            Prev
          </Button>
          <Button colorScheme="blue" variant="solid" onClick={next}>
            Next
          </Button>
        </Stack>
        <Flex
          width={{ base: '80%', md: '60%', lg: '40%' }}
          gap={'10px'}
          m="auto"
        >
          <Select
            onChange={e => handleSorting(e.target.value)}
            placeholder="Sort By Rating"
          >
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </Select>
          <Select
            onChange={e => handlePriceSorting(e.target.value)}
            placeholder="Sort By Price"
          >
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </Select>
          <Select onChange={e => handleFiltering(e.target.value)}>
            <option value="all">Filter By Type</option>
            <option value="fine_dining">Fine Dining</option>
            <option value="casual_dining">Casual Dining</option>
            <option value="fast_food">Fast Food</option>
            <option value="cafe">Cafe</option>
            <option value="ethnic">Ethnic</option>
          </Select>
        </Flex>
        <SimpleGrid templateColumns="repeat(3, 1fr)">
          {myData.map(el => {
            return (
              <Stack
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
                    {el.name}
                  </Heading>
                  <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                    {el.Riggert}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    {el.type}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    {el.fine_dining}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    {el.rating}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    {el.number_of_votes}
                  </Text>
                  <Text textAlign={'center'} px={3}>
                    {el.price_starts_from}
                  </Text>
                  <Stack
                    width={'50%'}
                    mt={'3rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
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
                      }}
                      onClick={function () {
                        cart.push(el);
                        localStorage.setItem('addToCart', JSON.stringify(cart));
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
