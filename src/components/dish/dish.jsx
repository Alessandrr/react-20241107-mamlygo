import styles from './dish.module.css';
import { DishCounter } from '../counter/dishCounter.jsx';
import { NavLink } from 'react-router-dom';

export const Dish = ({ isAuthenticated, name, id }) => {
  return (
    <li className={styles.dish}>
      <NavLink className={styles.dishLink} to={`/dish/${id}`}>
        {name}
      </NavLink>
      {isAuthenticated && <DishCounter id={id} />}
    </li>
  );
};
