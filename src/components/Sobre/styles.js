import styled from "styled-components";

export const Sobrecontainer = styled.div`
  /* --- 1. CONFIGURAÇÃO GERAL DA PÁGINA --- */
  width: 100%;
  min-height: 100vh;
  /* Gradiente azul padrão do seu projeto */
  background: linear-gradient(135deg, #001540 0%, #0044cc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px; /* Espaço para a Navbar não cobrir o conteúdo */
  padding-bottom: 50px;

  /* --- 2. CONTAINER DO CONTEÚDO (Centraliza e limita largura) --- */
  .Content {
    display: flex;
    align-items: center; /* Alinha verticalmente no centro */
    justify-content: space-evenly;
    width: 80vw;
    gap: 0px; /* Espaço entre o texto e a imagem */
  }

  /* --- 3. LADO ESQUERDO: TEXTO --- */
  .TextSide {
    color: white;
    width: 40vw;
    
    p{
    font-size: 2rem;
    line-height: 1.3; /* Altura da linha para facilitar leitura */
    text-align: left; /* Texto justificado igual à imagem */
    }
    h1{
    font-size: 4rem;
    color: #FFFF00;

    }
  }

  /* --- 4. LADO DIREITO: IMAGEM E BOTÃO --- */
  .VisualSide {
    display: flex;
    width: 30vww;
    flex-direction: column;
    align-items: center; /* Centraliza o botão com a imagem */
    gap: 30px;
  }

  .VisualSide img {
    width: 15vw;
    border-radius: 15px; /* Bordas levemente arredondadas */
    filter:drop-shadow(5px 5px 2px #000000ff);
    object-fit: cover;
    transition: transform 0.3s;
  }


  .VisualSide button {
    background-color: #FFFF00; /* Amarelo Neon */
    color: #001540; /* Azul Escuro */
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 15px 50px;
    border-radius: 50px; /* Formato pílula */
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: all 0.2s ease-in-out;
  }

  .VisualSide button:hover {
    transform: scale(1.05);
    background-color: #e6eb39;
    filter:drop-shadow(0px 0px 2px #FFFF00);
  }

  /* --- 5. RESPONSIVIDADE (CELULAR) --- */
  @media (max-width: 900px) {
    .Content {
      flex-direction: column-reverse; /* Imagem vai pra cima, texto pra baixo */
      gap: 30px;
    }

    .TextSide {
      text-align: center; /* No celular texto centralizado fica melhor */
      font-size: 1rem;
    }
  }

  & .TextSide p .paixao {
    color: #FFFF00;
    font-weight: bold;
  }

  & .TextSide p .amizade {
    color: #FFFF00;
    font-weight: bold;
  }

  & .TextSide p .missao {
    color: #FFFF00;
  }
`;