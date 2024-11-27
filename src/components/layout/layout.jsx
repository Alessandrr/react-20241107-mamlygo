import { ProgressBar } from '../progressBar/progressBar.jsx';
import styles from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header className={styles.header}>Header</header>
      {children}
      <footer className={styles.footer}>footer</footer>
    </>
  );
};
