import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditarContainer } from './styles'; // Importa o componente de estilo que acabamos de corrigir
import { UserContext } from '../../context/UserContext';
import defaultAvatar from '../../assets/icon.webp';

// Ícone do Lápis (PencilIcon)
const PencilIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

export function EditarPerfil() {
  const { user, updateProfile } = useContext(UserContext);
  const navigate = useNavigate();

  // Estados com valores default do usuário
  const [nome, setNome] = useState(user.nome || 'FULANO B.');
  const [idade, setIdade] = useState(user.idade || '19');
  const [bio, setBio] = useState(user.bio || '');
  const [local, setLocal] = useState(user.local || '');
  const [esportes, setEsportes] = useState(user.esportes || '');

  const [novaImagemURL, setNovaImagemURL] = useState(null);
  const inputRef = useRef(null);

  const handleCircleClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNovaImagemURL(url);
    }
  };

  const handleSalvar = () => {
    const avatarToSave = novaImagemURL || user.avatar || defaultAvatar;

    updateProfile({ 
      nome, 
      idade, 
      bio, 
      local, 
      esportes,
      avatar: avatarToSave
    });
    navigate('/conta');
  };

  const avatarDisplay = novaImagemURL || user.avatar || defaultAvatar;

  return (
    <EditarContainer>
      <div className="CardPrincipal">
        
        {/* Coluna Esquerda */}
        <div className="ColunaEsquerda">
            <div className="AvatarWrapper">
                <img src={avatarDisplay} alt="Avatar" />
                
                <button className="EditIconBadge" onClick={handleCircleClick}>
                    <PencilIcon />
                </button>
            </div>

            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />

            <div className="InputTransparente">
                <input 
                    type="text" 
                    value={nome} 
                    onChange={e => setNome(e.target.value)} 
                    className="InputNome"
                />
                <span className="IconePequeno"><PencilIcon /></span>
            </div>

            {/* Idade Editável: Agora exibe 'anos' na mesma linha */}
            <div className="InputTransparente InputIdadeWrapper">
                <input 
                    type="text" 
                    value={idade} 
                    onChange={e => setIdade(e.target.value.replace(' anos', ''))} 
                    className="InputIdade"
                />
                
                <span className="SuffixText">ANOS</span>
                <span className="IconePequeno"><PencilIcon /></span>
            </div>
                
            <button className="BtnConfirmar" onClick={handleSalvar}>CONFIRMAR</button>
        </div>

        {/* Coluna Direita */}
        <div className="ColunaDireita">
            
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