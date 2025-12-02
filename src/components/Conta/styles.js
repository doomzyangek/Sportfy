import styled from 'styled-components';

export const Contacontainer = styled.div`
  /* 1. O Fundo Gradiente Azul */
  width: 100vw;
  height: 100vh;
  min-height: 100vh; /* Garante altura total */
  background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%);
  display: flex;
  justify-content: center;
  align-items: center; /* Centraliza tudo no meio da tela */

  /* 2. A div principal que envolve tudo (.Perfil) */
  .Perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Espaço vertical entre a foto, nome, estrelas e botões */
    text-align: center;
  }

  /* 3. A Foto (.Iconeperfil) */
  .Iconeperfil img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%; /* Faz a bola perfeita */
    object-fit: cover; /* Impede a imagem de distorcer */
  }

  /* 4. O Nome (.Nomeperfil) */
  .Nomeperfil p {
    color: white;
    font-size: 4rem;
    font-weight: 900; /* Extra bold */
    text-transform: uppercase;
    margin: 10px 0;
    font-family: sans-serif; /* Garante uma fonte limpa */
  }

  /* 5. As Estrelas (.Avaliacaoperfil) */
  .Avaliacaoperfil {
    display: flex;
    gap: 8px; /* Espaço entre as estrelas */
    margin-bottom: 20px;
  }

  .Avaliacaoperfil img {
    width: 4rem;
    height: 4rem;
    /* Dica: Use uma imagem PNG de estrela amarela ou troque por ícones depois */
  }

  /* 6. Os Botões (.Opcoesperfil) */
  .Opcoesperfil {
    display: flex;
    gap: 20px; /* Espaço entre os botões */
    flex-wrap: wrap;
    justify-content: center;
  }

  .Opcoesperfil button {
    background-color: #FFFF00; /* Amarelo vibrante */
    color: #001540; /* Azul escuro no texto para contraste */
    border: none;
    width: 25rem;
    height: 5rem;
    border-radius: 50px; /* Borda bem redonda (Pílula) */
    font-weight: 800;
    font-size: 1.5rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }

  .Opcoesperfil button:hover {
    transform: scale(1.05);
    filter:drop-shadow(0px 0px 20px #faff3e);
  }
`;
