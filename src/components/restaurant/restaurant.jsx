import { Menu } from '../menu/menu.jsx';
import { Reviews } from '../reviews/reviews.jsx';
import { ReviewForm } from '../reviewForm/reviewForm.jsx';
import styles from './restaurant.module.css';
import { useAuth } from '../authContext/useAuth.js';

export const Restaurant = ({ restaurantData }) => {
  const { name, menu, reviews } = restaurantData;
  const { auth } = useAuth();

  if (!name || !menu.length) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menuItems={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {auth.isAuthenticated && <ReviewForm />}
    </div>
  );
};
