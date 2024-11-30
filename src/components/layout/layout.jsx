import { ProgressBar } from '../progressBar/progressBar.jsx';
import { ThemeContextProvider } from '../themeContext/themeContext.jsx';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import { AuthContextProvider } from '../authContext/authContext.jsx';

export const Layout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
