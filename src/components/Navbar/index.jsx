import { Container, MenuLink } from './styles';
import React from 'react';

function Navbar() {
  return (
    <Container>
      {/* O 'to' deve bater com as rotas que definiremos no main.jsx */}
      <MenuLink to="/home">HOME</MenuLink>
      <MenuLink to="/sobre">SOBRE</MenuLink>
      <MenuLink to="/eventos">EVENTOS</MenuLink>
      <MenuLink to="/conta">CONTA</MenuLink>
    </Container>
  );
}

export default Navbar;