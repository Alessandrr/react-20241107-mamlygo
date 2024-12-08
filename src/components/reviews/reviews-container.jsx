import { useAuth } from '../authContext/useAuth.js';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Reviews } from './reviews.jsx';

export const ReviewsContainer = ({ restaurantId }) => {
  const { auth } = useAuth();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const reviewIds = restaurant?.reviews;

  if (!reviewIds?.length) return null;

  return (
    <Reviews reviewIds={reviewIds} isAuthenticated={auth.isAuthenticated} />
  );
};
