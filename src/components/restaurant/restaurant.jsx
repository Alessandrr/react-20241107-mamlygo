import { Menu } from '../menu/menu.jsx';
import { Reviews } from '../reviews/reviews.jsx';
import { ReviewForm } from '../reviewForm/reviewForm.jsx';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurantData }) => {
  const { name, menu, reviews } = restaurantData;

  if (!name || !menu.length) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menuItems={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <ReviewForm />
    </div>
  );
};
