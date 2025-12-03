import React, { useState, useRef } from 'react';
import { Postarcontainer } from './style.js';
import { useNavigate } from 'react-router-dom';

export function Postar() {
  const [imagemURL, setImagemURL] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleCircleClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagemURL(url);
    }
  };

  return (
    <Postarcontainer>
      <div className="conteudo">
        <div className="quadrado">
          <div className="titulo">
            <h1>DESCRIÇÃO</h1>
          </div>
          <div className="descricao">
            <p>Defina a descrição do evento aqui...</p>
          </div>
        </div>

        <div className="coluna-direita">
          <div className="quadro">
            <div className="upload-container" onClick={handleCircleClick}>
              <div className="circulo">
                {imagemURL ? (
                  <img src={imagemURL} alt="Pré-visualização do Evento" className="imagem-preview" />
                ) : (
                  <h5>+</h5>
                )}
              </div>
              <h1 className="add-text">ADICIONAR FOTO</h1>
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />

          <div className="botao-container-direita">
            <button className="btn-postar" onClick={() => navigate('/eventos')}>
              POSTAR EVENTO
            </button>
          </div>
        </div>
      </div>
    </Postarcontainer>
  );
}