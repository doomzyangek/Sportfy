import React from "react";
import { Eventoscontainer } from "./styles.js";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

export function Eventos() {
const navigate = useNavigate();
  return (
    <Eventoscontainer>
        
        <div className="Sugestoes">
          <p className="Sugestoestxt">
            SUGESTÕES DE EVENTOS PARA VOCÊ:
          </p>
          
          <div className="Sugestoescards">
            
            {/* CARD 1 - FUTEBOL */}
            <div className="Card">
              <div className="Badge">
                <img src="src/assets/futebol.webp" />
              </div>
              {/* Imagem Normal */}
              <img className="CardImg" src="src/assets/eventofut.webp"/>
              
              {/* Texto que aparece no Hover */}
              <div className="Overlay">
                <h3>Futebol</h3>
                <p>Partida amistosa no campo do centro.</p>
              </div>
            </div>

            {/* CARD 2 - BASQUETE */}
            <div className="Card">
              <div className="Badge">
                <img src="src/assets/basquete.webp" />
              </div>
              <img className="CardImg" src="src/assets/eventobasq.webp" />
              <div className="Overlay">
                <h3>Basquete 3x3</h3>
                <p>Torneio rápido na quadra 2.</p>
              </div>
            </div>

            {/* CARD 3 - VÔLEI */}
            <div className="Card">
              <div className="Badge">
                <img src="src/assets/volei.webp" />
              </div>
              <img className="CardImg" src="src/assets/evenntovolei.webp" />
              <div className="Overlay">
                <h3>Vôlei de Praia</h3>
                <p>Treino misto no sábado de manhã.</p>
              </div>
            </div>

            {/* CARD 4 - ACADEMIA */}
            <div className="Card">
              <div className="Badge">
                <img src="src/assets/academia.webp" />
              </div>
              <img className="CardImg" src="src/assets/eventocross.webp" />
              <div className="Overlay">
                <h3>Crossfit</h3>
                <p>Aulão experimental gratuito.</p>
              </div>
            </div>

          </div>

        </div>
        
        <div className="Criacaoevento">
          <p className="Chamada">CRIE SEU PRÓPRIO EVENTO</p>
            <div className="botao">

              <button onClick={() => navigate('/postar')}>CRIAR EVENTO</button>
              <div className="quadrado"></div>

          </div>

        </div>
    </Eventoscontainer>
  );
}