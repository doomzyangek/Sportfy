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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 1. Engloba tudo */}
      
      <GlobalStyle />
      
      <Navbar /> {/* 2. Navbar fica aqui, visível em todas as páginas */}

      <Routes> {/* 3. As páginas que mudam ficam aqui */}
        <Route path="/" element={<Cover />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)