import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
  
  export default function SplitScreen() {
    let isLogin=localStorage.getItem("isLogin")
    console.log(isLogin);
    const navigate=useNavigate()
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Teachers
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Manage All Students
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The manage your classes.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {
                isLogin?(<Button
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }} onClick={()=>navigate("/home")}>
                    See All Students
                  </Button>):(<Button
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }} onClick={()=>navigate("/login")}>
                    See All Students
                  </Button>)
              
              
              }
              <Button rounded={'full'}>Take Help</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Flex>
      </Stack>
    );
  }