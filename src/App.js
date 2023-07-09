import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Continent from './pages/Continent';
import Category from './pages/Category';
import List from './pages/List';
import Details from './pages/DetailsPage';

const router = createBrowserRouter([

  {
    path:'/',element:<Continent/>
  },
  {
    path:'/continent/:categoryId',element:<Category/>
  },
  {
    path:'/countries/:countriesId',element:<List/>
  },
  {
    path:'/destination/:destinationId',element:<Details/>
  },


]);
function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;