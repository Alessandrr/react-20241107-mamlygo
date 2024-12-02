import { Menu } from '../menu/menu.jsx';
import { Reviews } from '../reviews/reviews.jsx';
import { ReviewForm } from '../reviewForm/reviewForm.jsx';
import styles from './restaurant.module.css';
import { useAuth } from '../authContext/useAuth.js';

export const Restaurant = ({ name, menu, reviews }) => {
  const { auth } = useAuth();

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu dishIds={menu} />}
      {Boolean(reviews.length) && <Reviews reviewIds={reviews} />}
      {auth.isAuthenticated && <ReviewForm />}
    </div>
  );
};
