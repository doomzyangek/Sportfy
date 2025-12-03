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
            <br></br>
            Bem-vindo ao Sportfy! Somos a plataforma ideal para quem busca socializar e praticar esportes.
            Somos mais do que um organizador de eventos; somos uma comunidade dedicada a unir pessoas através da <span className="paixao">paixão</span> pelo movimento.
            
            <br></br>
            <br></br>

            <span className="missao">Nossa Missão: </span>
            Acreditamos no esporte como um catalisador para <span className="amizade">amizades</span>. Nossa missão é conectar você com eventos esportivos próximos e facilitar a organização de encontros. Queremos que cada jogo, corrida ou treino seja uma oportunidade para fazer novos amigos e fortalecer o espírito de equipe.
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
