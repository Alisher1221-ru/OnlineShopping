import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import { ChakraProvider } from '@chakra-ui/react';
import Header from './header/Header';
import Footer from './Footer/footer';
import Link from './Link';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
        <Header/>
        <Link/>
        <Footer/>
    </BrowserRouter>
  </ChakraProvider>
)
