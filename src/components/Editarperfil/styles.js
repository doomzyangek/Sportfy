import styled from 'styled-components';

export const EditarContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  /* Layout principal */
  .CardPrincipal {
    display: flex;
    width: 100%;
    max-width: 1000px;
    gap: 60px;
    align-items: flex-start;

    /* No telemóvel, fica um em cima do outro */
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
  }

  /* --- LADO ESQUERDO --- */
  .ColunaEsquerda {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    flex: 1;
  }

  .AvatarWrapper {
    position: relative;
    margin-bottom: 10px;

    img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        object-fit: cover;
        background-color: #4a90e2;
        border: 4px solid #0f1640;
    }

    /* Botãozinho de lápis na foto */
    .EditIconBadge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #FFFF00;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #001540;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        
        &:hover { transform: scale(1.1); }
    }
  }

  /* Campos transparentes (Nome e Idade) */
  .InputTransparente {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    input {
        background: transparent;
        border: none;
        color: white;
        text-align: center;
        font-weight: 900;
        text-transform: uppercase;
        outline: none;
        width: 100%;
    }

    .InputNome { font-size: 2.2rem; }
    .InputIdade { font-size: 1.5rem; }

    /* Bolinha amarela com lápis */
    .IconePequeno {
        background: #FFFF00;
        color: #001540;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }
  }

  .BtnConfirmar {
    margin-top: 30px;
    background-color: #FFFF00;
    color: #001540;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    font-weight: 900;
    font-size: 1.3rem;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    
    &:hover { transform: scale(1.05); }
  }


  /* --- LADO DIREITO --- */
  .ColunaDireita {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1.5;
    width: 100%;
  }

  .CampoAmarelo {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        color: white;
        font-size: 1.8rem;
        font-weight: 800;
        text-transform: uppercase;
    }
  }

  /* O input estilo "Pílula Amarela" */
  .InputWrapper {
    position: relative;
    display: flex;
    align-items: center;
    
    input, select {
        width: 100%;
        background-color: #FFFF00;
        border: none;
        border-radius: 50px;
        padding: 15px 50px 15px 25px;
        font-size: 1rem;
        font-weight: 700;
        color: #001540;
        text-transform: uppercase;
        outline: none;
        box-shadow: 4px 4px 0px rgba(0,0,0,0.2);
        
        &::placeholder {
            color: #001540;
            opacity: 1;
        }
    }

    select { appearance: none; cursor: pointer; }

    /* Ícone dentro do input */
    svg, span {
        position: absolute;
        right: 20px;
        color: #001540;
        pointer-events: none;
    }
  }
`;