import { Layout } from './components/layout/layout.jsx';
import { RestaurantsPage } from './pages/restaurants-page/retaurantsPage.jsx';
import { ThemeContextProvider } from './components/themeContext/themeContext.jsx';
import { AuthContextProvider } from './components/authContext/authContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { RestaurantContainer } from './components/restaurant/restaurant-container.jsx';
import { Reviews } from './components/reviews/reviews.jsx';
import { Menu } from './components/menu/menu.jsx';
import { DishPage } from './pages/dish-page/dish-page.jsx';
import { MenuPage } from './pages/menu-page/menu-page.jsx';
import { ReviewsPage } from './pages/reviews-page/reviews-page.jsx';

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
                element: <Navigate to="menu" replace />,
              },
              {
                path: 'reviews',
                element: <ReviewsPage />,
              },
              {
                path: 'menu',
                element: <MenuPage />,
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
