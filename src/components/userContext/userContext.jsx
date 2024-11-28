import { UserContext } from './index.js';
import { useState } from 'react';

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
