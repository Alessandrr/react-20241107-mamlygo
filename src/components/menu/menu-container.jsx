import { useRequest } from '../../redux/hooks/use-request.js';
import { getDishes } from '../../redux/entities/dishes/get-dishes.js';
import { useAuth } from '../authContext/useAuth.js';
import { Menu } from './menu.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';

export const MenuContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getDishes, restaurantId);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const dishIds = restaurant?.menu;

  const { auth } = useAuth();

  if (requestStatus === 'pending') {
    return 'loading';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  if (!dishIds?.length) return null;

  return <Menu dishIds={dishIds} isAuthenticated={auth.isAuthenticated} />;
};
