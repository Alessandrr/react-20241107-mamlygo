import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Restaurant } from './restaurant.jsx';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../redux/hooks/use-request.js';
import { getRestaurant } from '../../redux/entities/restaurants/get-restaurant.js';

export const RestaurantContainer = () => {
  const { id } = useParams();
  const requestStatus = useRequest(getRestaurant, id);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (requestStatus === 'pending') {
    return 'loading';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  if (!restaurant) return null;

  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} menu={menu} reviews={reviews} id={id} />;
};
