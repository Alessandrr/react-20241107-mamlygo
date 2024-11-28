import { useTheme } from '../themeContext/useTheme.js';
import { Button } from '../button/button.jsx';

export const SwitchTheme = () => {
  const { value, setValue } = useTheme();

  const toggleTheme = () => {
    if (value === 'light') {
      setValue('dark');
    } else {
      setValue('light');
    }
  };

  return <Button onClick={toggleTheme}>Toggle theme</Button>;
};
