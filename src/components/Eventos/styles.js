import styled from "styled-components";

export const Eventoscontainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px; /* Espaço para a Navbar */
  gap: 40px;

  /* --- SEÇÃO DE CIMA (Título e Botão) --- */
  .Criacaoevento {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }

  .Chamada {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .Btcriar {
    background-color: #FAFF3E; /* Amarelo */
    color: #001540;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 15px 40px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .Btcriar:hover {
    transform: scale(1.05);
    filter:drop-shadow(0px 0px 20px #faff3e);
  }

  /* --- SEÇÃO DE SUGESTÕES --- */
  .Sugestoes {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .Sugestoestxt {
    color: white;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .Sugestoescards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }

  /* --- AQUI ACONTECE A MÁGICA DO CARD --- */
  .Card {
    position: relative; /* Essencial para o overlay funcionar */
    width: 20rem;
    height: 20rem;
    border-radius: 20px;
    overflow: hidden; /* Garante que o blur não saia das bordas */
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }

  /* 1. O Ícone (Bolinha no canto) */
  .Badge {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-color: #faff3e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 10; /* Fica sempre por cima */
    border: 2px solid #555;


    & img{
      width:1.5rem;
    }
  }

  /* 2. A Imagem de Fundo */
  .CardImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease; /* Suaviza o efeito */
  }

  /* 3. O Texto escondido (Overlay) */
  .Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro transparente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    
    /* Estado inicial: Invisível */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .Overlay h3 {
    color: #FAFF3E;
    font-size: 1.1rem;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .Overlay p {
    color: #ddd;
    font-size: 0.85rem;
  }

  /* --- INTERAÇÃO (HOVER) --- */
  
  /* Quando passar o mouse no .Card, mude a .CardImg */
  .Card:hover .CardImg {
    filter: blur(5px);
    transform: scale(1.1);
  }

  /* Quando passar o mouse no .Card, mude o .Overlay */
  .Card:hover .Overlay {
    opacity: 1; /* Aparece */
  }
`