import styles from './reviews.module.css';
import { ReviewContainer } from '../review/review-container.jsx';

export const Reviews = ({ reviewIds }) => {
  return (
    <div className={styles.reviewsContainer}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviewIds.map((reviewId) => (
          <ReviewContainer id={reviewId} key={reviewId} />
        ))}
      </ul>
    </div>
  );
};
