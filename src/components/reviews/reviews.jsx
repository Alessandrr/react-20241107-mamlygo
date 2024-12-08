import styles from './reviews.module.css';
import { ReviewContainer } from '../review/review-container.jsx';
import { ReviewForm } from '../reviewForm/reviewForm.jsx';

export const Reviews = ({ reviewIds, isAuthenticated }) => {
  return (
    <div className={styles.reviewsContainer}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviewIds.map((reviewId) => (
          <ReviewContainer id={reviewId} key={reviewId} />
        ))}
      </ul>

      {isAuthenticated && <ReviewForm />}
    </div>
  );
};
