import { ProgressBar } from '../progressBar/progressBar.jsx';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
};
