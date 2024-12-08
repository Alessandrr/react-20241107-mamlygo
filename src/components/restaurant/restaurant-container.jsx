import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Restaurant } from './restaurant.jsx';

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { name, menu, reviews } = restaurant;

  if (!restaurant || !menu.length) return null;

  return (
    <Restaurant name={name} menu={menu} reviews={reviews} id={restaurantId} />
  );
};
