import styles from './reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviewsContainer}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li className={styles.reviewItem} key={review.id}>
            {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
