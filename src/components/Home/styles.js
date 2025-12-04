import styled, { keyframes } from 'styled-components';

const runAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) translateX(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) translateX(100vw) scale(1.5);
    opacity: 0;
  }
`;

export const Homecontainer = styled.div`

    background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Montserrat', sans-serif;

    & .titulo {
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        position: relative;
    }

    & .runner-animation {
        position: absolute;
        top: 550px;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        width: 20%;
        animation: ${runAnimation} 1.2s ease-out forwards;
        pointer-events: none;

        & img {
            width: 30%;
        }
    }

    & .SP h1 {
        color: white;
        font-size: 170px;
        margin-bottom: 100px;
    }

    & .frase p {
        color: white;
        font-size: 34px;
        text-align: center;
        max-width: 900px;
    }

    & .frase p .conectar {
        color: #FFFF00;
        font-weight: bold;
    }

    & .frase p .divertir {
        color: #FFFF00;
        font-weight: bold;
    }

    & .botoes-container {
        display: flex;
        gap: 20px;
        margin-top: 40px; 
    }

    & .botao button{
        margin-top: 80px;
        background-color: #FFFF00;    
        color: #0f1640;             
        padding: 12px 50px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-weight: bold;
        width: 400px;
        height: 80px;
        font-size: 30px;
        justify-content: columns;
    }

`