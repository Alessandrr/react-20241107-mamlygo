import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/restaurants-slice.js';
import { useTheme } from '../themeContext/useTheme.js';
import { RestaurantTabs } from './restaurant-tabs.jsx';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants.js';
import { useRequest } from '../../redux/hooks/use-request.js';

export const RestaurantTabsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { themeValue } = useTheme();

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === 'pending') {
    return 'loading';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  if (!restaurantIds.length) return null;

  return <RestaurantTabs ids={restaurantIds} themeValue={themeValue} />;
};
