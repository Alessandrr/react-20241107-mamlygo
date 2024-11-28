import { restaurants } from '../../mocks/restaurants.js';
import styles from './restaurantTabs.module.css';
import classNames from 'classnames';

export const RestaurantTabs = ({ onChange, activeRestaurantId }) => {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsNav}>
        {restaurants.map((restaurant) => (
          <button
            className={classNames(styles.tab, {
              [styles.tabSelected]: activeRestaurantId === restaurant.id,
            })}
            key={restaurant.id}
            onClick={() => onChange(restaurant)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
    </div>
  );
};
