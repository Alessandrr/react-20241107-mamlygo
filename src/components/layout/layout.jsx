import { ProgressBar } from '../progressBar/progressBar.jsx';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};
