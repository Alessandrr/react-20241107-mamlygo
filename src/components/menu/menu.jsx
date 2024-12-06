import styles from './menu.module.css';
import { useAuth } from '../authContext/useAuth.js';
import { DishContainer } from '../dish/dish-container.jsx';
import { useOutletContext } from 'react-router-dom';

export const Menu = () => {
  const { auth } = useAuth();
  const { menu: dishIds } = useOutletContext();

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {dishIds.map((dishId) => (
          <DishContainer
            key={dishId}
            id={dishId}
            isAuthenticated={auth.isAuthenticated}
          />
        ))}
      </ul>
    </div>
  );
};
