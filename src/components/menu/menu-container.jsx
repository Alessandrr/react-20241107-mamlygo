import { useAuth } from '../authContext/useAuth.js';
import { Menu } from './menu.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const dishIds = restaurant?.menu;

  const { auth } = useAuth();

  if (!dishIds?.length) return null;

  return <Menu dishIds={dishIds} isAuthenticated={auth.isAuthenticated} />;
};
