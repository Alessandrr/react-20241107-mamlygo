import { Layout } from './components/layout/layout.jsx';
import { RestaurantsPage } from './pages/restaurantsPage/retaurantsPage.jsx';
import { ThemeContextProvider } from './components/themeContext/themeContext.jsx';
import { AuthContextProvider } from './components/authContext/authContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RestaurantContainer } from './components/restaurant/restaurant-container.jsx';
import { Reviews } from './components/reviews/reviews.jsx';
import { Menu } from './components/menu/menu.jsx';
import { DishPage } from './pages/dishPage/dish-page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'restaurants',
        element: <RestaurantsPage />,
        children: [
          {
            path: ':id',
            element: <RestaurantContainer />,
            children: [
              {
                index: true,
                element: <Menu />,
              },
              {
                path: 'reviews',
                element: <Reviews />,
              },
              {
                path: 'menu',
                element: <Menu />,
              },
            ],
          },
        ],
      },
      {
        path: 'dish/:id',
        element: <DishPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
