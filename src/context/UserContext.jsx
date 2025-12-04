import React, { createContext, useState } from 'react';

// Dados Iniciais (MUDANÇA AQUI: Definição clara do estado inicial)
const INITIAL_STATE = {
  nome: '',
  email: '',
  isLoggedIn: false, 
  // Adicione 'idade', 'bio', 'local', 'esportes' se forem usados na tela de perfil
  idade: '', 
  bio: '',
  local: '',
  esportes: '',
};

// Cria a "caixa" que guarda os dados
export const UserContext = createContext(INITIAL_STATE);

export const UserProvider = ({ children }) => {
  // Estado inicial
  const [user, setUser] = useState(INITIAL_STATE);

  // Função para fazer login (guarda os dados e muda o estado)
  const login = (dados) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...dados,
      isLoggedIn: true,
    }));
  };

  // Função para atualizar dados (ex: editar perfil)
  const updateProfile = (dados) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...dados,
    }));
  };

  // FUNÇÃO DE LOGOUT ADICIONADA: Reseta o estado para o INITIAL_STATE
  const logout = () => {
    setUser(INITIAL_STATE);
  };

  return (
    <UserContext.Provider value={{ user, login, updateProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};