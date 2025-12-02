import React from 'react';
import { Covercontainer } from './styles.js';
import LOGO from '/src/assets/STICKER.png';
import { useNavigate } from 'react-router-dom';

export function Cover() {
  const navigate = useNavigate();

  function irParaHome() {
    navigate('/home');
  }

  return (
    <Covercontainer>

      <div className="logo">
        <h5>®</h5>
          <img src={LOGO} alt="Logo Sportfy" /><h1>SPORTFY</h1>
      </div>

      <div className="texto">

        <div className="inicio">
          <h1>PRATIQUE<br/>
            & CONECTE
          </h1>
        </div>  

        <div className="verde"> 
          <h1>& DIVIRTA-SE</h1>
        </div>

      </div>

      <div className="botao">
        <button onClick={irParaHome}>SAIBA MAIS →</button>
      </div>

    </Covercontainer>
  );
}
