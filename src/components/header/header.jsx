import styles from './header.module.css';
import { SwitchTheme } from '../switch-theme/switch-theme.jsx';
import { LoginButton } from '../loginButton/loginButton.jsx';

export const Header = () => {
  return (
    <header className={styles.header}>
      <SwitchTheme />
      <LoginButton />
      Header
    </header>
  );
};
