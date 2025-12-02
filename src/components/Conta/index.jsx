import React from 'react';
import { Contacontainer } from './styles.js';

export function Conta() {
  return (
    <Contacontainer>
      <div className='Perfil'>
        <div className='Iconeperfil'>
          <img src="src/assets/icon.webp"/>
        </div>
        <div className='Nomeperfil'>
          <p>Fulano</p>
        </div>
        <div className='Avaliacaoperfil'>
          <img src="src/assets/star.png"/>
          <img src="src/assets/star.png"/>
          <img src="src/assets/star.png"/>
          <img src="src/assets/star.png"/>
          <img src="src/assets/star.png"/>
        </div>
        <div className='Opcoesperfil'>
          <button>EDITAR PERFIL</button>
          <button>COMPARTILHAR PERFIL</button>
        </div> 
      </div>
      
    </Contacontainer>
  );
}