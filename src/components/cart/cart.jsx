import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/entities/cart/cart-slice.js';
import styles from './cart.module.css';
import { DishContainer } from '../dish/dish-container.jsx';

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items || !items.length) {
    return null;
  }

  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartHeader}>Cart</h3>
      <ul className={styles.cartList}>
        {items.map(({ id }) => (
          <DishContainer key={id} id={id} isAuthenticated={true} />
        ))}
      </ul>
    </div>
  );
};
