import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Tab } from './tab.jsx';

export const RestaurantTabContainer = ({ id, theme, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  return (
    <Tab
      isActive={isActive}
      theme={theme}
      onClick={() => onClick(id)}
      title={restaurant.name}
    ></Tab>
  );
};
