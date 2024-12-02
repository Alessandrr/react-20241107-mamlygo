import styles from './dish.module.css';
import { Counter } from '../counter/counter.jsx';

export const Dish = ({ isAuthenticated, name }) => {
  return (
    <li className={styles.dish}>
      {name}
      {isAuthenticated && <Counter min={0} max={5} />}
    </li>
  );
};
