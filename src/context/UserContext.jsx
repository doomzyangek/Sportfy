import React, { createContext, useState } from 'react';

// Cria a "caixa" que guarda os dados
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Dados iniciais
  const [user, setUser] = useState({
    nome: '',
    email: '',
    isLoggedIn: false, // Começa deslogado
  });

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

  return (
    <UserContext.Provider value={{ user, login, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};