import React from "react";
import { Sobrecontainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Sobre() {
const navigate = useNavigate();
  return (
    
    <Sobrecontainer>
      <div className="Content">
        
        {/* Lado Esquerdo: Texto */}
        <div className="TextSide">
          <h1>SOBRE NÓS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea qui velit aspernatur, aliquam impedit eum amet quisquam vel ullam adipisci dolorem distinctio? Unde minus ipsa ipsum hic? Eos, assumenda vitae.
          </p>
        </div>

        {/* Lado Direito: Imagem e Botão */}
        <div className="VisualSide">
          {/* Exemplo com imagem da internet, troque pelo seu src */}
          <img 
            src="src/assets/Logo.webp" 
          />
          
          <button onClick={() => navigate('/eventos')}>
            VER EVENTOS
          </button>
        </div>

      </div>
    </Sobrecontainer>

  );
}
