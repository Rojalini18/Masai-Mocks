import React from 'react';
import {
  ChakraProvider,
  Box,
 
  VStack,
Text,
  Grid,
  theme,
  Wrap,
  WrapItem,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {Link as RouterLink} from 'react-router-dom'
import Allroutes from './Pages/Allroutes';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Stack direction='column'>
              <Wrap spacing={4}>
                <RouterLink to="/">
                <WrapItem>
                  <Text colorScheme='red'>Admin</Text>
                </WrapItem>
                </RouterLink>
            
                <RouterLink to="/user">
                <WrapItem>
                  <Text colorScheme='green'>User</Text>
                </WrapItem>
                </RouterLink>
               




              </Wrap>
            </Stack>
            <Allroutes/>
          
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
