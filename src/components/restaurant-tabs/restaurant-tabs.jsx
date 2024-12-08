import classNames from 'classnames';
import styles from './restaurant-tabs.module.css';
import { RestaurantTabContainer } from '../tab/restaurant-tab-container.jsx';

export const RestaurantTabs = ({ ids, themeValue }) => {
  return (
    <div
      className={classNames(styles.tabsContainer, {
        [styles.dark]: themeValue === 'dark',
      })}
    >
      <div className={styles.tabsNav}>
        {ids.map((restaurantId) => {
          return (
            <RestaurantTabContainer
              key={restaurantId}
              id={restaurantId}
              theme={themeValue}
            />
          );
        })}
      </div>
    </div>
  );
};
