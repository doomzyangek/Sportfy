import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditarContainer } from './styles';
import { UserContext } from '../../context/UserContext';
// Importação direta da imagem padrão para garantir que funciona
import defaultAvatar from '../../assets/icon.webp';

// Ícone de Lápis simples (SVG)
const PencilIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

export function EditarPerfil() {
  const { user, updateProfile } = useContext(UserContext);
  const navigate = useNavigate();

  // 1. Estados Simples (apenas texto)
  const [nome, setNome] = useState(user.nome || 'FULANO B.');
  const [idade, setIdade] = useState(user.idade || '19 anos');
  const [bio, setBio] = useState(user.bio || '');
  const [local, setLocal] = useState(user.local || '');
  const [esportes, setEsportes] = useState(user.esportes || '');

  // 2. Função de Salvar (envia os dados e volta)
  const handleSalvar = () => {
    updateProfile({ 
      nome, 
      idade, 
      bio, 
      local, 
      esportes,
      // Se não houver avatar no user, usa o importado
      avatar: user.avatar || defaultAvatar 
    });
    navigate('/conta');
  };

  return (
    <EditarContainer>
      <div className="CardPrincipal">
        
        {/* --- LADO ESQUERDO (Foto e Nome) --- */}
        <div className="ColunaEsquerda">
            <div className="AvatarWrapper">
                {/* Mostra o avatar atual ou o padrão */}
                <img src={user.avatar || defaultAvatar} alt="Avatar" />
                
                {/* Botão de Lápis (Apenas visual por enquanto) */}
                <button className="EditIconBadge">
                    <PencilIcon />
                </button>
            </div>

            {/* Nome Editável */}
            <div className="InputTransparente">
                <input 
                    type="text" 
                    value={nome} 
                    onChange={e => setNome(e.target.value)} 
                    className="InputNome"
                />
                <span className="IconePequeno"><PencilIcon /></span>
            </div>

            {/* Idade Editável */}
            <div className="InputTransparente">
                <input 
                    type="text" 
                    value={idade} 
                    onChange={e => setIdade(e.target.value)} 
                    className="InputIdade"
                />
                <span className="IconePequeno"><PencilIcon /></span>
            </div>

            <button className="BtnConfirmar" onClick={handleSalvar}>CONFIRMAR</button>
        </div>

        {/* --- LADO DIREITO (Formulário Amarelo) --- */}
        <div className="ColunaDireita">
            
            {/* Campo BIO */}
            <div className="CampoAmarelo">
                <label>BIO</label>
                <div className="InputWrapper">
                    <input 
                        type="text" 
                        placeholder="DIGITE AQUI A SUA BIO..." 
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    />
                    <PencilIcon />
                </div>
            </div>

            {/* Campo LOCAL */}
            <div className="CampoAmarelo">
                <label>LOCAL</label>
                <div className="InputWrapper">
                    <input 
                        type="text" 
                        placeholder="DIGITE AQUI A SUA LOCALIZAÇÃO..." 
                        value={local}
                        onChange={e => setLocal(e.target.value)}
                    />
                    <PencilIcon />
                </div>
            </div>

            {/* Campo ESPORTES */}
            <div className="CampoAmarelo">
                <label>ESPORTES</label>
                <div className="InputWrapper">
                    <select value={esportes} onChange={e => setEsportes(e.target.value)}>
                        <option value="">ESCOLHA SEUS ESPORTES FAVORITOS</option>
                        <option value="Futebol">Futebol</option>
                        <option value="Vôlei">Vôlei</option>
                        <option value="Basquete">Basquete</option>
                        <option value="Skate">Skate</option>
                        <option value="Academia">Academia</option>
                    </select>
                    <span>▼</span>
                </div>
            </div>

        </div>
      </div>
    </EditarContainer>
  );
}