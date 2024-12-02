import styles from './review.module.css';

export const Review = ({ text }) => {
  return <li className={styles.reviewItem}>{text}</li>;
};
