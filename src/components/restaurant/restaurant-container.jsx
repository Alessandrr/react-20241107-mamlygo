import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Restaurant } from './restaurant.jsx';
import { useParams } from 'react-router-dom';

export const RestaurantContainer = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant;

  if (!restaurant || !menu.length) return null;

  return <Restaurant name={name} menu={menu} reviews={reviews} id={id} />;
};
