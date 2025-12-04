import React, { useState, useContext } from 'react';
import { Contacontainer } from './styles.js';
import { UserContext } from '../../context/UserContext'; 
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../../assets/icon.webp';

export function Conta() {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(UserContext); 

  // Estados locais para o formulário de login/criação de perfil
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // NOVA FUNÇÃO: Reseta os estados locais do formulário
  const resetFormFields = () => {
    setNome('');
    setIdade('');
    setEmail('');
    setSenha('');
  };

  function handleEditClick() {
    navigate('/editar');
  }

  function handleLogoutClick() {
    logout();
    resetFormFields(); // <--- CHAMADA ADICIONADA: Zera os campos
    // Mantido: Volta para a própria rota '/conta', que exibe o login
    navigate('/conta'); 
  }

  const handleLogin = () => {
    // Validação básica do formulário
    if (nome.trim() && idade.trim() && email.trim() && senha.trim()) {
      // Cria um novo perfil (simulação de login com dados iniciais)
      login({ nome, idade, email, senha });
      // Opcional: Limpar o formulário após o login (se quiser evitar que as credenciais fiquem visíveis)
      // resetFormFields(); 
    } else {
      console.error("Por favor, preencha o nome, idade, e-mail e senha.");
    }
  };

  if (!user.isLoggedIn) {
    return (
      // --- BLOCO DE LOGIN/CRIAÇÃO DE PERFIL ---
      <Contacontainer> 
        <h1 className="TituloPagina">PRIMEIRA VEZ AQUI?</h1>
        
        <div className='CardLogin'>
            <h2>LOGIN</h2>
            
            <div className="InputGroup">
              <input type="text" placeholder="NOME DE USUÁRIO" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="InputGroup">
              <input type="text" placeholder="IDADE" value={idade} onChange={(e) => setIdade(e.target.value)} />
            </div>
            <div className="InputGroup">
              <input type="email" placeholder="E-MAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="InputGroup">
              <input type="password" placeholder="SENHA" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button onClick={handleLogin}>CRIAR PERFIL</button> 
        </div>
      </Contacontainer>
    );
  }

  // --- BLOCO DE PERFIL (MANTIDO) ---
  const avatarToDisplay = user.avatar || defaultAvatar;

  return (
    <Contacontainer>
      <div className='Perfil'>
        <div className='Iconeperfil'>
          <img src={avatarToDisplay} alt="Foto de perfil"/> 
        </div>
        <div className='Nomeperfil'>
          <p>{user.nome}</p> 
          <span style={{color: '#ccc', fontSize: '1rem'}}>{user.email}</span>
        </div>
        
        {user.idade && (
            <div className='DetalhesPerfil'>
                <p style={{color: 'white', fontSize: '1.2rem', marginTop: '0.5rem', fontWeight: 700}}>
                    {user.idade} anos
                </p>
                {user.local && (
                   <p style={{color: '#ccc', fontSize: '1rem', marginTop: '0.2rem'}}>📍 {user.local}</p>
                )}
                {user.esportes && (
                   <p style={{color: '#fff', fontSize: '1rem', marginTop: '0.5rem', backgroundColor: '#001540', padding: '5px 10px', borderRadius: '15px', display: 'inline-block'}}>
                      🏆 {user.esportes}
                   </p>
                )}
                {user.bio && (
                   <p style={{color: '#fff', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '300px', textAlign: 'center'}}>
                      "{user.bio}"
                   </p>
                )}
            </div>
        )}

        <div className='Avaliacaoperfil'>
          <img src="src/assets/star.png" alt="Estrela"/>
          <img src="src/assets/star.png" alt="Estrela"/>
          <img src="src/assets/star.png" alt="Estrela"/>
          <img src="src/assets/star.png" alt="Estrela"/>
          <img src="src/assets/star.png" alt="Estrela"/>
        </div>
        
        <div className='Opcoesperfil'>
          <button onClick={handleEditClick}>EDITAR PERFIL</button> 
          <button onClick={handleLogoutClick} style={{backgroundColor: '#FF4500'}}>SAIR</button>
        </div> 
      </div>
    </Contacontainer>
  );
}