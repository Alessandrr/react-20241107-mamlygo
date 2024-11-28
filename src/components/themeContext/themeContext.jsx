import { ThemeContext } from './index.js';
import { useState } from 'react';

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ value: theme, setValue: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
