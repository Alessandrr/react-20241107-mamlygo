import styles from './reviews.module.css';
import { ReviewContainer } from '../review/review-container.jsx';
import { useOutletContext } from 'react-router-dom';
import { useAuth } from '../authContext/useAuth.js';
import { ReviewForm } from '../reviewForm/reviewForm.jsx';

export const Reviews = () => {
  const { reviews: reviewIds } = useOutletContext();
  const { auth } = useAuth();

  if (!reviewIds.length) {
    return null;
  }

  return (
    <div className={styles.reviewsContainer}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviewIds.map((reviewId) => (
          <ReviewContainer id={reviewId} key={reviewId} />
        ))}
      </ul>

      {auth.isAuthenticated && <ReviewForm />}
    </div>
  );
};
