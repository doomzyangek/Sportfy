import styled from 'styled-components';

export const Contacontainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* Fundo azul gradiente principal */
  background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  /* Título "Primeira vez aqui?" */
  .TituloPagina {
    color: white;
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: uppercase;
    font-family: sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  /* --- CARTÃO DE LOGIN --- */
  .CardLogin {
    background-color: #050a25; /* Azul bem escuro */
    padding: 3rem 4rem;
    border-radius: 0; /* O seu exemplo parece quadrado ou pouco arredondado */
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);

    h2 {
      color: white;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 10px;
      letter-spacing: 2px;
    }

    /* Agrupamento de Label + Input */
    .InputGroup {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* O estilo visual do campo amarelo */
    input {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      border-radius: 25px; /* Borda redonda (Pílula) */
      border: none;
      background-color: #FFFF00; /* Amarelo Neon */
      color: #000;
      font-weight: 800;
      font-size: 1.2rem;
      outline: none;
    }

    /* Label simulando estar "dentro" ou sobre o input */
    label {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: black;
      font-weight: 900;
      font-size: 1rem;
      text-transform: uppercase;
      pointer-events: none; /* Para clicar através do texto */
      opacity: 0.7;
      display: none; /* Ocultei o label tradicional para usar só o placeholder se preferir, ou ative para sobrepor */
    }
    
    /* Alternativa: Label acima do input como na imagem 1 (texto preto dentro da barra amarela) */
    /* Para fazer EXATAMENTE como a imagem 1, onde diz "NOME DE USUÁRIO" dentro da barra amarela: */
    /* Vamos usar o placeholder ou o valor do input para digitar */
    
    input::placeholder {
      color: black;
      opacity: 1;
      font-weight: 900;
      text-transform: uppercase;
    }

    button {
      background-color: #FFFF00;
      color: #050a25;
      border: none;
      padding: 15px 50px;
      border-radius: 50px;
      font-weight: 900;
      font-size: 1.5rem;
      cursor: pointer;
      text-transform: uppercase;
      margin-top: 20px;
      box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
      transition: transform 0.2s;
    }

    button:hover {
      transform: scale(1.05);
    }
  }

  /* --- ESTILOS DO PERFIL (MANTIDOS IGUAIS) --- */
  .Perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;
  }

  .Iconeperfil img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #4a90e2; 
  }

  .Nomeperfil {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Nomeperfil p {
    color: white;
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    margin: 5px 0;
  }

  .Avaliacaoperfil {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
  }

  .Avaliacaoperfil img {
    width: 3rem;
    height: 3rem;
  }

  .Opcoesperfil {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .Opcoesperfil button {
    background-color: #FFFF00;
    color: #001540;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 800;
    font-size: 1.2rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }

  .Opcoesperfil button:hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 0px 10px #faff3e);
  }
`;