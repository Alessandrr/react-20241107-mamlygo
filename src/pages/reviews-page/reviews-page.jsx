import { useParams } from 'react-router-dom';
import { ReviewsContainer } from '../../components/reviews/reviews-container.jsx';

export const ReviewsPage = () => {
  const { id: restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
