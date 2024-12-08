import { Outlet } from 'react-router-dom';
import { RestaurantTabsContainer } from '../../components/restaurant-tabs/restaurant-tabs-container.jsx';

export const RestaurantsPage = () => {
  return (
    <>
      <RestaurantTabsContainer />
      <Outlet />
    </>
  );
};
