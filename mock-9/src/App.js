import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Allroutes from './Pages/Allroutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Box>
        <Allroutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
