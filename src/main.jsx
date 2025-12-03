import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle.js';
import { createRoot } from 'react-dom/client';
import {Cover} from './components/Cover';
import {Home} from './components/Home';
import {Eventos} from './components/Eventos';
import {Footer} from './components/Footer'
import {Conta} from './components/Conta'
import {Sobre} from './components/Sobre';
import { UserProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolva TUDO com o UserProvider */}
    <UserProvider>
      <BrowserRouter> 
        
        <GlobalStyle />
        
        <Navbar /> 

        <Routes> 
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/conta" element={<Conta />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)