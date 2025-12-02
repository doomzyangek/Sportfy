import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.5rem;
  width:100vw;
  padding: 2rem;
  /* Adicione cor de fundo se precisar, ou deixe transparente */
`;

// Criamos um componente estilizado baseado no NavLink
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  color: #FFFFFF; /* Cor padrão (quando inativo) */
  transition: all 0.3s ease-in-out;
  
  &.active:hover{
    transform: scale(1.2);
    filter:drop-shadow(0px 0px 10px #faff3e);
  }
  &:hover{
    transform: scale(1.2);
    filter:drop-shadow(0px 0px 10px #ffffffff);
  }

  /* A MÁGICA ACONTECE AQUI: */
  /* O React Router aplica a classe .active automaticamente na rota atual */
  &.active {
    color: #FAFF3E; /* Amarelo (Gold) ou a cor exata do seu design */
  }
`;