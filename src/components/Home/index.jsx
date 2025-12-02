import React from 'react';
import { Homecontainer } from './styles.js';
import { useNavigate } from "react-router-dom";

export function Home() {
const navigate = useNavigate();
  return (
    <Homecontainer>

      <div className="titulo">
        
        <div className="SP">

          <h1>SPORTFY</h1>

        </div>

        <div className="frase">

          <p>Milhares apaixonados por atividade física já escolheram o Sportfy para se <span className='conectar'>conectar</span> e se <span className='divertir'>divertir</span>!</p>

        </div>

        <div className="botao">

          <button onClick={() => navigate('/sobre')}>NOS CONHEÇA</button>
          <div className="quadrado"></div>

        </div>

      </div>

    </Homecontainer>
  );
}
