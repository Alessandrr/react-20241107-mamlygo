import { Layout } from './components/layout/layout.jsx';
import { RestaurantsPage } from './components/restaurantsPage/retaurantsPage.jsx';
import { ThemeContextProvider } from './components/themeContext/themeContext.jsx';
import { AuthContextProvider } from './components/authContext/authContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
