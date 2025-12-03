import React, { useState, useCallback } from 'react';
import { Homecontainer } from './styles.js';
import { useNavigate } from "react-router-dom";
import boneco from '../../assets/STICKER.png'

export function Home() {
const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = useCallback((path) => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate(path);
    }, 1200);
  }, [navigate]);

  return (
    <Homecontainer>
      <div className="titulo">
        
        <div className="SP">
          <h1>SPORTFY</h1>
        </div>

        <div className="frase">
          <p>Milhares apaixonados por atividade física já escolheram o Sportfy para se <span className='conectar'>conectar</span> e se <span className='divertir'>divertir</span>!</p>
        </div>

        <div className="botoes-container"> 
          
          <div className="botao">
            <button onClick={() => navigate('/sobre')}>NOS CONHEÇA</button>
            <div className="quadrado"></div>
          </div>

          <div className="botao">
            <button onClick={() => handleNavigation('/eventos')}>VER EVENTOS</button>
            <div className="quadrado"></div>
          </div>

          <div className="botao">
            <button onClick={() => navigate('/conta')}>ACESSAR CONTA</button>
            <div className="quadrado"></div>
          </div>
        
        </div>

        {isAnimating && (
          <div className="runner-animation">
            <img src={boneco} alt="Boneco correndo animado" />
          </div>
        )}

      </div>
    </Homecontainer>
  );
}