import { restaurants } from '../../mocks/restaurants.js';
import styles from './restaurantTabs.module.css';
import { Button } from '../button/button.jsx';
import { useTheme } from '../themeContext/useTheme.js';
import classNames from 'classnames';

export const RestaurantTabs = ({ onChange, activeRestaurantId }) => {
  const { value: themeValue } = useTheme();

  return (
    <div
      className={classNames(styles.tabsContainer, {
        [styles.dark]: themeValue === 'dark',
      })}
    >
      <div className={styles.tabsNav}>
        {restaurants.map((restaurant) => {
          const viewVariant =
            activeRestaurantId === restaurant.id ? 'tabSelected' : 'tab';

          return (
            <Button
              theme={themeValue}
              viewVariant={viewVariant}
              key={restaurant.id}
              onClick={() => onChange(restaurant)}
            >
              {restaurant.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
