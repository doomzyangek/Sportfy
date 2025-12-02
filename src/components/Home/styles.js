import styled from 'styled-components';

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
    }

    & .SP h1 {
        color: white;
        font-size: 80px;
        margin-bottom: 100px;
    }

    & .frase p {
        color: white;
        font-size: 24px;
        text-align: center;
        max-width: 650px;
    }

    & .frase p .conectar {
        color: #faff3e;
        font-weight: bold;
    }

    & .frase p .divertir {
        color: #faff3e;
        font-weight: bold;
    }

    & .botao button{
        margin-top: 70px;
        background-color: #faff3e;  
        color: #0f1640;                
        padding: 12px 50px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-weight: bold;
        width: 250px;
        font-size: 16px;
    }

`
