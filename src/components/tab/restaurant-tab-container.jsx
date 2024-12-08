import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Tab } from './tab.jsx';

export const RestaurantTabContainer = ({ id, theme }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  return (
    <Tab
      theme={theme}
      id={id}
      title={restaurant.name}
      linkTo={`/restaurants/${id}`}
    ></Tab>
  );
};
