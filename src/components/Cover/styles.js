import styled from 'styled-components';

export const Covercontainer = styled.div`

  background-image: url('/src/assets/fundo.png'); 
  background-repeat: no-repeat; 
  background-size: cover;       
  background-position: center;


  border: none;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  & .logo {
  
    & img {
    width: 2%;
    margin-left: 100px;
    margin-bottom: 40px;
    }

    & h5 {
    font-family: 'Montserrat', sans-serif;
    color: #FFFF00;
    margin-left: 127px;
    margin-bottom: -10px;
    }

    & h1 {
    color: #FFFF00;
    margin-left: 143px;   
    margin-top: -67px;
    font-size: 20px; 
    margin-bottom: 40px;
    }
}

    & .texto{
    margin-left: 100px;
    margin-bottom: 0px;
  }


  & .inicio h1{
    color: white;
    font-size: 109px;
    margin: 0;
    line-height: 0.85;
  }

  & .verde h1{
    color: #FFFF00;
    font-size: 109px;
    margin: 0;
    line-height: 0.85;
  }

  & .botao button{
    margin-left: 100px;
    margin-top: 40px;
    background-color: #ffffffff;  
    color: #041032;                
    padding: 12px 50px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    width: 200px;
  }

  & .botao .quadrado{
    width: 100px;
    height: 39px;
    background-color: #041032;
    margin-left: 250px;
    margin-top: -39px;
    border-radius: 30px;
    }

    & .imagem img{
    width: 25%;
    margin-right: -200px;
    margin-top: -300px;
    }
`;
