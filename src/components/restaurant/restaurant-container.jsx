import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Restaurant } from './restaurant.jsx';

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant;

  if (!restaurant || !menu.length) return null;

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
