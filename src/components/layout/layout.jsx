import { ProgressBar } from '../progressBar/progressBar.jsx';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import { Cart } from '../cart/cart.jsx';
import { useAuth } from '../authContext/useAuth.js';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const { auth } = useAuth();

  return (
    <>
      <ProgressBar />
      <Header />
      <Outlet />
      {auth.isAuthenticated && <Cart />}
      <Footer />
    </>
  );
};
