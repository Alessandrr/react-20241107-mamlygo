import { useRequest } from '../../redux/hooks/use-request.js';
import { getReviews } from '../../redux/entities/reviews/get-reviews.js';
import { useAuth } from '../authContext/useAuth.js';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice.js';
import { Reviews } from './reviews.jsx';
import { getUsers } from '../../redux/entities/users/get-users.js';

export const ReviewsContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers);

  const { auth } = useAuth();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const reviewIds = restaurant?.reviews;

  if (requestStatus === 'pending') {
    return 'loading';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  if (!reviewIds?.length) return null;

  return (
    <Reviews reviewIds={reviewIds} isAuthenticated={auth.isAuthenticated} />
  );
};
