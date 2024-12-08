import styles from './menu.module.css';
import { DishContainer } from '../dish/dish-container.jsx';

export const Menu = ({ dishIds, isAuthenticated }) => {
  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {dishIds.map((dishId) => (
          <DishContainer
            key={dishId}
            id={dishId}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </ul>
    </div>
  );
};
