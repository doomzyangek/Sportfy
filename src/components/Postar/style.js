import styled from 'styled-components';

export const Postarcontainer = styled.div`

    background: linear-gradient(135deg, #0f1640 0%, #0338c0 100%);
    min-height: 100vh;
    padding-top: 120px; 
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding-bottom: 120px;

    .conteudo {
        display: flex;
        gap: 80px;
        width: 90%;
        max-width: 1900px;
        justify-content: center;
        align-items: flex-start; 
    }

    .coluna-direita {
        display: flex;
        flex-direction: column; 
        gap: 40px; 
        align-items: center; 
    }

    .quadrado {
        width: 1000px;
        height: 800px;
        background-color: rgba(100, 113, 145, 0.5);
        border-radius: 51px;
        padding: 40px;
    }

    .titulo h1 {
        color: #faff3e;
        font-size: 80px;
        margin: 0;
    }

    .descricao p {
        color: black;
        font-size: 36px;
        font-weight: bold;
        margin-top: 80px;
    }

    .quadro {
        width: 900px;
        height: 600px;
        background-color: rgba(100, 113, 145, 0.5);
        border-radius: 51px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .upload-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .circulo {
        width: 300px;
        height: 300px;
        background-color: #313131;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden; 
        cursor: pointer;
    }

    .circulo h5 {
        color: white;
        font-size: 180px;
        line-height: 0;
    }

    .imagem-preview {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        border-radius: 50%; 
    }

    .add-text {
        color: white;
        font-size: 60px;
        font-weight: bold;
        text-align: center;
    }

    .botao-container-direita {
        width: 100%; 
    }

    .btn-postar {
        background-color: #faff3e; 
        color: #0f1640;
        padding: 30px 100px; 
        border: none;
        border-radius: 51px;
        cursor: pointer;
        font-weight: bold;
        font-size: 40px;
        transition: 0.2s;
        width: 900px; 
        height: 155px;
    }

    .btn-postar:hover {
        transform: scale(1.05);
    }
`;