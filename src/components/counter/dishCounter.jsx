import styles from './counter.module.css';
import { Button } from '../button/button.jsx';
import { useTheme } from '../themeContext/useTheme.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from '../../redux/ui/cart/cart-slice.js';

export const DishCounter = ({ id }) => {
  const { value: themeValue } = useTheme();
  const dispatch = useDispatch();
  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(removeFromCart(id));

  return (
    <div className={styles.counterContainer}>
      <Button theme={themeValue} onClick={decrement} viewVariant="counter">
        -
      </Button>
      {amount}
      <Button theme={themeValue} onClick={increment} viewVariant="counter">
        +
      </Button>
    </div>
  );
};
