import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/restaurants-slice.js';
import { useTheme } from '../themeContext/useTheme.js';
import { RestaurantTabs } from './restaurant-tabs.jsx';

export const RestaurantTabsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { themeValue } = useTheme();

  if (!restaurantIds.length) return null;

  return <RestaurantTabs ids={restaurantIds} themeValue={themeValue} />;
};
