import { AuthContext } from './index.js';
import { useState } from 'react';

const STUB_USER = {
  username: 'stub_user',
};

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthenticated
        ? { isAuthenticated: false }
        : { isAuthenticated: true, username: STUB_USER.username };
    });
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
