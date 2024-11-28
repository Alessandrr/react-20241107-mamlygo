import { ProgressBar } from '../progressBar/progressBar.jsx';
import { ThemeContextProvider } from '../themeContext/themeContext.jsx';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import { UserContextProvider } from '../userContext/userContext.jsx';

export const Layout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
