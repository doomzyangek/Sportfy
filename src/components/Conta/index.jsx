import React, { useState, useContext } from 'react';
import { Contacontainer } from './styles.js';
import { UserContext } from '../../context/UserContext'; 

export function Conta() {
  const { user, login } = useContext(UserContext);

  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (nome.trim() && email.trim() && senha.trim()) {
      // Enviamos nome e email para o contexto global
      login({ nome, email , senha});
    } else {
      alert("Por favor, preencha o nome, e-mail e senha.");
    }
  };

  // --- SE NÃO TIVER SESSÃO INICIADA (TELA DE LOGIN) ---
  if (!user.isLoggedIn) {
    return (
      <Contacontainer>
        {/* Título fora do cartão */}
        <h1 className="TituloPagina">Primeira vez aqui?</h1>

        <div className='CardLogin'>
            <h2>LOGIN</h2>
            
            <div className="InputGroup">
              {/* Removi o label e coloquei o texto dentro do placeholder */}
              <input 
                type="text" 
                placeholder="NOME DE USUÁRIO"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="InputGroup">
              <input 
                type="email" 
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="InputGroup">
              <input 
                type="password" 
                placeholder="SENHA"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            
            <button onClick={handleLogin}>CRIAR PERFIL</button>
        </div>
      </Contacontainer>
    );
  }

  // --- SE TIVER SESSÃO INICIADA (TELA DE PERFIL) ---
  return (
    <Contacontainer>
      <div className='Perfil'>
        <div className='Iconeperfil'>
          <img src="src/assets/icon.webp" alt="Foto de perfil"/> 
        </div>
        
        <div className='Nomeperfil'>
          <p>{user.nome}</p> 
          {/* Mostra o e-mail abaixo do nome, opcional */}
          <span style={{color: '#ccc', fontSize: '1rem'}}>{user.email}</span>
        </div>

        <div className='Avaliacaoperfil'>
          {[1,2,3,4,5].map(star => (
             <img key={star} src="src/assets/star.png" alt="estrela"/>
          ))}
        </div>

        <div className='Opcoesperfil'>
          <button>EDITAR PERFIL</button>
          <button>PARTILHAR PERFIL</button>
        </div> 
      </div>
    </Contacontainer>
  );
}