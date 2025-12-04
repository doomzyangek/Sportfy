import styled from 'styled-components';

export const Contacontainer = styled.div`
 /* 1. O Fundo Gradiente Azul - MANTIDO */
 width: 100vw;
 height: 100vh;
 min-height: 100vh; 
 /* Ajustei o gradiente para o azul escuro da imagem */
 background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%); 
 display: flex;
 flex-direction: column; /* Agora permite o título e o CardLogin um abaixo do outro */
 justify-content: center;
 align-items: center; 
 gap: 30px; /* Espaçamento entre o título e o card */
 /* 2. TÍTULO 'PRIMEIRA VEZ AQUI?' */
 .TituloPagina {
  color: white;
  font-size: 2rem;
  font-weight: 900;
  /* Efeito sutil de 'glitch' no texto do título, se desejado */
 }
 /* 3. CARD DE LOGIN/CRIAÇÃO DE PERFIL */
 .CardLogin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80vw; /* Largura do card */
  max-width: 500px; /* Limite máximo para telas maiores */
  height: auto;
  padding: 40px 20px;
  /* Cor de fundo escura do card na imagem */
  background-color: #000c24; 
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5); /* Sombra mais intensa */
 }
 /* 4. Título 'LOGIN' dentro do card */
 .CardLogin h2 {
  color: white;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 30px;
  /* Efeito sutil de 'glitch' no texto */
 }
 
 /* 5. Inputs (NOME, IDADE, E-MAIL, SENHA) */
 .InputGroup {
  width: 100%;
  margin-bottom: 20px; /* Espaço entre os inputs */
 }
 .InputGroup input {
  width: 100%;
  height: 60px;
  background-color: #FFFF00; /* Amarelo da imagem */
  color: #0f1640; /* Texto em azul escuro */
  border: none;
  border-radius: 50px; /* Borda bem redonda */
  padding: 0 20px;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center; /* Centraliza o texto */
  outline: none;
 }
 /* Estilo para o placeholder/texto interno */
 .InputGroup input::placeholder {
  color: #0f1640;
  font-weight: 800;
 }
 /* 6. Botão 'CRIAR PERFIL' */
 .CardLogin button {
  background-color: #FFFF00; /* Amarelo da imagem */
  color: #0f1640; /* Texto em azul escuro */
  border: none;
  width: 100%;
  max-width: 300px;
  height: 60px;
  border-radius: 50px; 
  font-weight: 800;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 10px; /* Espaçamento após o último input */
  transition: all 0.2s ease-in-out;
 }
 .CardLogin button:hover {
  transform: scale(1.03);
 }
 /* --- ESTILOS DO PERFIL (MANTIDOS E APENAS MOVIDOS PARA BAIXO) --- */
 .Perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; 
  text-align: center;
  width: 100%; /* Ajuste para centralizar melhor */
  margin-top: 100px; /* Afasta do topo se o contêiner for 
  */
 }
 /* ... Resto dos estilos de perfil ... */
 .Iconeperfil img {
  width: 20rem;
  height: 20rem;
  border-radius: 50%; 
  object-fit: cover; 
 }
 .Nomeperfil p {
  color: white;
  font-size: 4rem;
  font-weight: 900; 
  margin: 10px 0;
  font-family: sans-serif; 
 }
 .Avaliacaoperfil {
  display: flex;
  gap: 8px; 
  margin-bottom: 20px;
 }
 .Avaliacaoperfil img {
  width: 4rem;
  height: 4rem;
 }
 .Opcoesperfil {
  display: flex;
  gap: 20px; 
  flex-wrap: wrap;
  justify-content: center;
 }
 .Opcoesperfil button {
  background-color: #FFFF00; 
  color: #0f1640; 
  border: none;
  width: 25rem;
  height: 5rem;
  border-radius: 50px; 
  font-weight: 800;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 }
 .Opcoesperfil button:hover {
  transform: scale(1.05);
  filter:drop-shadow(0px 0px 20px #faff3e);
 }
`;